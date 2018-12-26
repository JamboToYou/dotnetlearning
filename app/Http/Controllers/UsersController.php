<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Http\Transformers\UserTransformer;
use Illuminate\Support\Facades\Auth;

class UsersController extends Controller
{
	public function getUser()
	{
		$user = User::find(intval($_COOKIE["user_id"]));
		return fractal()
			->item($user, new UserTransformer)
			->toJson();
	}
}
