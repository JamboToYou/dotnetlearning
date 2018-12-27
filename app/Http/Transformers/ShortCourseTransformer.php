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
			'author' => $course->author,
			'author_id' => $course->author_id,
			'created_at' => $course->created_at
		];

		return $result;
	}
}