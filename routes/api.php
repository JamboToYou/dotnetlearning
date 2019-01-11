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

Route::group(['prefix' => 'user'], function(){
	Route::get('/{id}', 'UsersController@getUser');
	Route::get('/full/{id}', 'UsersController@getFullUser');
	Route::post('/customize/{id}', 'UsersController@customizeUser');
	Route::post('/changeRole/{id}', 'UsersController@changeRole');
});
Route::redirect('/testimg', Gravatar::get('jamboto@example.com', ['size' => 100, 'fallback' => 'wavatar']), 301);


Route::post('/register', 'RegisterController@create');
// Route::post('/register', function(Request $request){ return $request; });
Route::post('/login', 'LoginController@login');


Route::group(['prefix' => 'course'], function () {
	Route::get('/get/{id}', 'CoursesController@getCourse');
	Route::get('/allShort', 'CoursesController@getAllShort');
	Route::get('/full/{id}', 'CoursesController@getFullCourse');
	Route::delete('/{id}', 'CoursesController@removeCourse');
	Route::post('/courseToLearn', 'CoursesController@getCourseToLearn');
	Route::post('/', 'CoursesController@addCourse');
	Route::patch('/{id}', 'CoursesController@updateCourse');
});

Route::group(['prefix' => 'chapter'], function () {
	Route::post('/', 'ChaptersController@addChapter');
	Route::delete('/{id}', 'ChaptersController@removeChapter');
});

Route::group(['prefix' => 'lesson'], function () {
	Route::post('/', 'LessonsController@addLesson');
	Route::delete('/', 'LessonsController@removeLesson');
});