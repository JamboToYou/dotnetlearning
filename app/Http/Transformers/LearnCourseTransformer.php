<?php

namespace App\Http\Transformers;

use App\Course;

class LearnCourseTransformer extends \League\Fractal\TransformerAbstract
{
	public function transform(Course $course)
	{
		$result = [
			'id' => $course->id,
			'author_id' => $course->author_id,
			'title' => $course->title,
			'description' => $course->description,
			'chapters' => array_map(function($chapter){
				return [
					'id' => $chapter['id'],
					'order_value' => $chapter['order_value'],
					'test_id' => $chapter['test_id'],
					'title' => $chapter['title'],
					'description' => $chapter['description'],
					'test' => $chapter['test'],
					'lessons' => array_map(function($lesson){
						return [
							'id' => $lesson['id'],
							'chapter_id' => $lesson['chapter_id'],
							'test_id' => $lesson['test_id'],
							'order_value' => $lesson['order_value'],
							'title' => $lesson['title'],
							'lesson_body' => $lesson['lesson_body']
						];
					}, $chapter['lessons'])
				];
			}, $course->chapters),
			'created_at' => $course->created_at
		];

		if ($course->user_progress != null)
		{
			$progress = [
				'id' => $course->user_progress->id,
				'chapter_id' => $course->user_progress->chapter_id,
				'lesson_id' => $course->user_progress->lesson_id,
				'status' => $course->user_progress->status,
			];
			$result['user_progress'] = $progress;
		}

		return $result;
	}
}