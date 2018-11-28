<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTestKeysTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('test_keys', function (Blueprint $table) {
			$table->increments('id');
			$table->unsignedInteger('test_id');
			$table->unsignedInteger('order_value');
			$table->string('question');
			$table->string('answer');
			$table->integer('right');
			$table->timestamps();

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
		Schema::dropIfExists('test_keys');
	}
}
