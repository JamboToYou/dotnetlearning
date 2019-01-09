<?php

namespace App\Http\Transformers;

use App\Course;

class CourseTransformer extends \League\Fractal\TransformerAbstract
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

		if ($course->chapters != null) {
			foreach ($course->chapters as $chapter) {
				array_push($result['chapters'], [
					'id' => $chapter->id,
					'order_value' => $chapter->order_value,
					'test_id' => $chapter->test_id,
					'title' => $chapter->title,
					'description' => $chapter->description
				]);
			}
		}

		return $result;
	}
}