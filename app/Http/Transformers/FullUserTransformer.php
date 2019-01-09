<?php

namespace App\Http\Transformers;

use App\User;
use App\Http\Transformers\ShortCourseTransformer;

class FullUserTransformer extends \League\Fractal\TransformerAbstract
{
	public function transform(User $user)
	{
		$courseTransformer = new ShortCourseTransformer;
		$result = [
			'id' => $user->id,
			'first_name' => $user->first_name,
			'last_name' => $user->last_name,
			'about' => $user->about,
			'role' => $user->role,
			'email' => $user->email,
			'avatar' => $user->avatar,
			'completedCourses' => [],
			'createdCourses' => [],
			'created_at' => $user->created_at
		];

		if ($user->completedCourses != null)
			foreach ($user->completedCourses as $course)
				array_push(
					$result['completedCourses'],
					$courseTransformer->transform($course));

		if ($user->createdCourses != null)
			foreach ($user->createdCourses as $course)
				array_push(
					$result['createdCourses'],
					$courseTransformer->transform($course));

		return $result;
	}
}