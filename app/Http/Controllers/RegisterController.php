<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
	public function create($data)
	{
		return User::create([
			'first_name' => $data->first_name,
			'last_name' => $data->last_name,
			'email' => $data->email,
			'password' => Hash::make($data->password),
		]);
	}
}
