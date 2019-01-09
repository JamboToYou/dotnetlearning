<?php

namespace App\Utils;

use App\Course;
use App\Chapter;
use App\Lesson;
use App\User;

class CoursesWorker {

	public static function getCourse(int $course_id) {
		$course = Course::find($course_id);
		$course->author = User::find($course->author_id);
		$course->chapters = Chapter::where('course_id', $course->id)->get();

		return $course;
	}

	public static function getFullCourse(int $course_id) {
		$course = Course::find($course_id);
		$course->author = User::find($course->author_id);
		$course->chapters = Chapter::where('course_id', $course_id)->get();
		foreach ($course->chapters as $chapter) {
			$chapter->lessons = Lesson::where('chapter_id', $chapter->id)->get();
		}

		return $course;
	}

	public static function getShortCourse(int $course_id) {
		$course = Course::find($course_id);
		$course->author = User::find($course->author_id);
		return $course;
	}

}