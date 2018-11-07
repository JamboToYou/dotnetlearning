<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Course;

class CoursesController extends Controller
{
	public function getAll()
	{
		$courses = Course::all();

		return fractal()
			->collection($courses)
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
}
