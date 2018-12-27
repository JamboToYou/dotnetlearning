<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Course;
use App\Chapter;
use App\Lesson;
use App\User;
use App\Http\Transformers\CourseTransformer;
use App\Http\Transformers\ShortCourseTransformer;

class CoursesController extends Controller
{
	public function getAllShort()
	{
		$courses = Course::all();

		foreach($courses as $course)
		{
			$course->author = User::find($course->author_id);
		}

		return fractal()
			->collection($courses, new ShortCourseTransformer)
			->toJson();
	}

	public function updateCourse(Course $course, int $course_id)
	{
		$course_to_update = Course::find($course_id);

		$course_to_update->author_id = $course->author_id;
		$course_to_update->title = $course->title;
		$course_to_update->description = $course->description;

		$course_to_update->save();

		return 'OK';
	}

	public function addCourse(Request $course)
	{
		Course::add($course);

		return Course::getLast();
	}

	public function getCourse(int $id)
	{
		$course = Course::find($id);
		$course->chapters = Chapter::where('course_id', $id)->get();

		return fractal()
			->item($course, new CourseTransformer)
			->toJson();
	}

	public function getFullCourse(int $id)
	{
		$course = Course::find($id);
		$course->chapters = Chapters::where('course_id', $id)->get();
		foreach ($chapter->courses as $chapter) {
			$chapter->lessons = Lesson::where('chapter_id', $chapter->id)->get();
		}

		return fractal()
			->item($course, new FullCourseTransformer)
			->toJson();
	}
}
