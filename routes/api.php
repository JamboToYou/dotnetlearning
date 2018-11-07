<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', 'UsersController@getUser');

Route::post('/register', 'RegisterController@register');

Route::group(['prefix' => 'course'], function () {
	Route::get('/all', 'CoursesController@getAll');
	Route::get('/{id}', 'CoursesController@getCourse');
	Route::group(['middleware' => ['auth:api']], function () {
		Route::post('/', 'CoursesController@addCourse');
		Route::patch('/{id}', 'CoursesController@updateCourse');
	});
});