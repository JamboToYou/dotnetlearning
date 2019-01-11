<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Course;
use App\UserProgress;
use App\Utils\CoursesWorker;
use App\Http\Transformers\UserTransformer;
use App\Http\Transformers\FullUserTransformer;
use Illuminate\Support\Facades\Auth;
use Creativeorange\Gravatar\Facades\Gravatar;

class UsersController extends Controller
{
	public function getUser(int $user_id)
	{
		$user = User::find($user_id);
		return fractal()
			->item($user, new UserTransformer)
			->toJson();
	}

	public function getFullUser(int $user_id)
	{
		$user = User::find($user_id);

		$user->avatar = Gravatar::get($user->email, ['size' => 100, 'fallback' => 'wavatar']);

		$user->createdCourses = Course::where('author_id', $user_id)->get();
		foreach ($user->createdCourses as $course)
			$course->author = User::find($user_id);

		$userProgress = UserProgress::where('user_id', $user_id)->where('status', 'c')->get();
		$watchedCoursesIDs = array();
		foreach ($userProgress as $up)
			if (!in_array($up->course_id, $watchedCoursesIDs))
				array_push($watchedCoursesIDs, $up->course_id);
		$watchedCourses = array();
		foreach ($watchedCoursesIDs as $watchedCoursesID)
			array_push(
				$watchedCourses,
				CoursesWorker::getShortCourse($watchedCoursesID));
		$user->watchedCourses = $watchedCourses;

		return fractal()
			->item($user, new FullUserTransformer)
			->toJson();
	}

	public function customizeUser(Request $request)
	{
		try {
			$user = User::find($request->id);

			$user->first_name = $request->first_name;
			$user->last_name = $request->last_name;
			$user->about = $request->about;
			$user->email = $request->email;

			$user->save();

			return $user;
		}
		catch (\Throwable $ex) {
			return "error";
		}
	}

	public function changeRole(Request $request)
	{
		try {
			$user = User::find($request->id);

			$user->role = $request->role;
			
			$user->save();

			return $user;
		}
		catch (\Throwable $ex) {
			return "error";
		}
	}
}
