<?php

namespace App\Http\Controllers;

use App\Course;
use App\Chapter;
use App\Lesson;
use App\User;

use App\Http\Transformers\CourseTransformer;

use Illuminate\Http\Request;

class LessonsController extends Controller
{
	public function addLesson(Request $request)
	{
		try {
			$author_id = Course::find(Chapter::find($request->chapter_id)->course_id)->author_id;
			
			if ($author_id != $request->user_id)
				return "error";

			$lesson = new Lesson;

			$lesson->chapter_id = $request->chapter_id;
			$lesson->title = $request->title;
			$lesson->lesson_body = $request->lesson_body;
			$lesson->order_value = Lesson::where('chapter_id', $request->chapter_id)->get()->max('order_value') + 1;

			$lesson->save();

			$course = Course::find(Chapter::find($request->chapter_id)->course_id);
			$course->chapters = Chapter::where('course_id', $course->id)->get();

			return fractal()
				->item($course, new CourseTransformer)
				->toJson();

		} catch (\Throwable $err) {
			return "error";
		}
	}
}
