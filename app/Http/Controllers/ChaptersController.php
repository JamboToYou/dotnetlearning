<?php

namespace App\Http\Controllers;

use App\Course;
use App\Chapter;
use App\User;
use App\Lesson;

use App\Http\Transformers\CourseTransformer;

use Illuminate\Http\Request;

class ChaptersController extends Controller
{
	public function addChapter(Request $request)
	{
		try {
			$author_id = Course::find($request->course_id)->author_id;
			
			if ($author_id != $request->user_id)
				return "error";

			$chapter = new Chapter;

			$chapter->course_id = $request->course_id;
			$chapter->title = $request->title;
			$chapter->description = $request->description;
			$chapter->order_value = Chapter::where('course_id', $request->course_id)->get()->max('order_value') + 1;

			$chapter->save();

			$course = Course::find(Chapter::find(Chapter::max('id'))->course_id);
			$course->chapters = Chapter::where('course_id', $course->id)->get();

			return fractal()
				->item($course, new CourseTransformer)
				->toJson();

		} catch (\Throwable $err) {
			return "error";
		}
	}

	public function removeChapter(int $chapterId) {
		Lesson::where('chapter_id', $chapterId)->delete();
		return Chapter::destroy($chapterId);
	}
}
