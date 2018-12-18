<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserProgressesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_progresses', function (Blueprint $table) {
            $table->increments('id');
			$table->unsignedInteger('user_id')->required();
			$table->unsignedInteger('course_id')->required();
			$table->unsignedInteger('chapter_id')->required();
			$table->unsignedInteger('lesson_id')->reqired();
			$table->enum("status", ["n", "p", "c"])->required()->default("n");
            $table->timestamps();

			$table->foreign('user_id')->references('id')->on('users');
			$table->foreign('course_id')->references('id')->on('courses');
			$table->foreign('chapter_id')->references('id')->on('chapters');
			$table->foreign('lesson_id')->references('id')->on('lessons');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_progresses');
    }
}
