<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Course;
use App\Http\Transformers\UserTransformer;
use Illuminate\Support\Facades\Auth;

class UsersController extends Controller
{
	public function getUser()
	{
		$user = User::find(intval($_COOKIE["user_id"]));
		return fractal()
			->item($user, new UserTransformer)
			->toJson();
	}

	public function getFullUser(int $user_id)
	{
		$user = User::find($user_id);

		$user->createdCourses = Course::where('author_id', $user_id)->get();
		$user->completedCourses = null;

	}
}
