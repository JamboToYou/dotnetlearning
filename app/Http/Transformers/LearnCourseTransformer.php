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
			'chapters' => array(),
			'user_progress' => [
				'id' => $course->user_progress->id,
				'chapter_id' => $course->user_progress->chapter_id,
				'lesson_id' => $course->user_progress->lesson_id,
				'id' => $course->user_progress->id,
			],
			'created_at' => $course->created_at
		];

		foreach ($course->chapters as $chapter) {
			$res_chapter = [
				'id' => $chapter->id,
				'order_value' => $chapter->order_value,
				'test_id' => $chapter->test_id,
				'title' => $chapter->title,
				'description' => $chapter->description,
				'test' => [
					'id' => $chapter->test->id,
					'keys' => array()
				],
				'lessons' => array()
			];

			foreach ($chapter->lessons as $lesson) {
				array_push($res_chapter['lessons'], [
					'id' => $lesson->id,
					'chapter_id' => $lesson->chapter_id,
					'test_id' => $lesson->test_id,
					'order_value' => $lesson->order_value,
					'title' => $lesson->title,
					'lesson_body' => $lesson->description
				]);
			}

			foreach ($chapter->test->keys as $key) {
				array_push($res_chapter['test']['keys'], [
					'id' => $key->id,
					'order_value' => $key->order_value,
					'question' => $key->question,
					'answer' => $key->answer,
					'right' => $key->right
				]);
			}

			array_push($result['chapteres'], $res_chapter);
		}



		return $result;
	}
}