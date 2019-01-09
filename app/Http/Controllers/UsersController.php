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
		var_dump($_COOKIE);
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
		$completedCoursesIDs = array();
		foreach ($userProgress as $up)
			if (!in_array($up->course_id, $completedCoursesIDs))
				array_push($completedCoursesIDs, $up->course_id);
		$completedCourses = array();
		foreach ($completedCoursesIDs as $completedCoursesID)
			array_push(
				$completedCourses,
				CoursesWorker::getShortCourse($completedCoursesID));
		$user->completedCourses = $completedCourses;

		return fractal()
			->item($user, new FullUserTransformer)
			->toJson();
	}
}
