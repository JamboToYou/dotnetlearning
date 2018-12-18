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
		$user = Auth::user();
		if ($user != null)
		{
			return fractal()
				->item(Auth::user(), new UserTransformer)
				->toJson();
		}
		else
		{
			return fractal()
				->item(User::find(1), new UserTransformer)
				->toJson();
		}
	}
}
