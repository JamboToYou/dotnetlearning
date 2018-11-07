<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Http\Transformers\UserTransformer;

class UsersController extends Controller
{
    public function getUser(Request $request)
	{
		return fractal()
			->item($request->user)
			->transform(new UserTrandformer)
			->toArray();
	}
}
