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

Route::get('/user', 'UsersController@getUser');


Route::post('/register', 'RegisterController@create');
Route::post('/login', 'Auth\LoginController@login');


Route::group(['prefix' => 'course'], function () {
	Route::get('/get/{id}', 'CoursesController@getCourse');
	Route::get('/allShort', 'CoursesController@getAllShort');
	Route::post('/', 'CoursesController@addCourse');
	Route::patch('/{id}', 'CoursesController@updateCourse');
});