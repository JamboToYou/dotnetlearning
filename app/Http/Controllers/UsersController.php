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
		return fractal()
			->item(Auth::user())
			->transform(new UserTrandformer)
			->toArray();
	}
}
