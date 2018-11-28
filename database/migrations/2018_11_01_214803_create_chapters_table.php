<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateChaptersTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('chapters', function (Blueprint $table) {
			$table->increments('id');
			$table->unsignedInteger('course_id');
			$table->unsignedInteger('order_value');
			$table->unsignedInteger('test_id');
			$table->string('title');
			$table->text('description');
			$table->timestamps();

			$table->foreign('course_id')->references('id')->on('courses');
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
		Schema::dropIfExists('chapters');
	}
}
