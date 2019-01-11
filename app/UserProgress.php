<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserProgress extends Model
{
	protected $fillable = [
		'course_id', 'chapter_id', 'lesson_id', 'user_id', 'status'
	];
}
