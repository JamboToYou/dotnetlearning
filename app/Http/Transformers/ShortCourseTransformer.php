<?php

namespace App\Http\Transformers;

use App\Course;

class ShortCourseTransformer extends \League\Fractal\TransformerAbstract
{
	public function transform(Course $course)
	{
		$result = [
			'id' => $course->id,
			'title' => $course->title,
			'description' => $course->description,
			'chapters' => [],
			'created_at' => $course->created_at
		];

		foreach ($course->chapters as $chapter) {
			array_push($result['chapters'], [
				'id' => $chapter->id,
				'order_value' => $chapter->order_value,
				'title' => $chapter->title,
			]);
		}

		return $result;
	}
}