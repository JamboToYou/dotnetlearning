<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLessonsTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('lessons', function (Blueprint $table) {
			$table->increments('id');
			$table->unsignedInteger('chapter_id');
			$table->unsignedInteger('test_id');
			$table->string('title');
			$table->text('lesson_body');
			$table->timestamps();

			$table->foreign('chapter_id')->references('id')->on('chapters');
			$table->foreign('test_id')->references('id')->on('tests');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::dropIfExists('lessons');
	}
}
