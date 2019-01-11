<?php

namespace App\Http\Controllers;

use App\UserProgress;

use Illuminate\Http\Request;

class UserProgressesController extends Controller
{
	public function addUserProgress(Request $request) {
		return UserProgress::create([
			'course_id' => $request->course_id,
			'chapter_id' => $request->chapter_id,
			'lesson_id' => $request->lesson_id,
			'user_id' => $request->user_id,
			'status' => $request->status
		]);
	}
}
