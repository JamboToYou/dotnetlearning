<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Transformers\UserTransformer;
use Illuminate\Http\Request;

class LoginController extends Controller
{
	public function login(Request $data)
	{
		$user = User::where('email', $data->email)->get()->first();
		try {
			if ($user->password == $data->password) {
				return fractal()->item($user, new UserTransformer)->toJson();
			}
			return "error";
		}
		catch (Throwable $ex){
			return "error";
		}
	}
}
