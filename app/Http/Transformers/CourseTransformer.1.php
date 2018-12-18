<?php

namespace App\Http\Transformers;

use App\Course;

class FullCourseTransformer extends \League\Fractal\TransformerAbstract
{
	public function transform(Course $course)
	{
		$result = [
			'id' => $course->id,
			'author_id' => $course->author_id,
			'title' => $course->title,
			'description' => $course->description,
			'chapters' => [],
			'created_at' => $course->created_at
		];

		foreach ($course->chapters as $chapter) {
			$res_chapter = [
				'id' => $chapter->id,
				'order_value' => $chapter->order_value,
				'test_id' => $chapter->test_id,
				'title' => $chapter->title,
				'description' => $chapter->description,
				'lessons' => []
			];

			foreach ($chapter->lessons as $lesson) {
				arraay_push($chapter['lessons'], [
					'id' => $lesson->id,
					'chapter_id' => $lesson->chapter_id,
					'test_id' => $lesson->test_id,
					'order_value' => $lesson->order_value,
					'title' => $lesson->title,
					'description' => $lesson->description,
					'title' => $lesson->title
				]);
			}
		}

		return $result;
	}
}