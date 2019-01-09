<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
	public function create(Request $data)
	{
		try {
			$user = new User;

			$user->first_name = $data->first_name;
			$user->last_name = $data->last_name;
			$user->email = $data->email;
			$user->password = $data->password;
			$user->about = $data->about;

			$user->save();

			return $user;
			
		} catch (\Throwable $ex) {
			return "error";
		}
	}
}
