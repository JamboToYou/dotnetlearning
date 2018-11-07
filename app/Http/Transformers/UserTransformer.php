<?php

namespace App\Http\Transformers;

use App\User;

class UserTransformer extends \League\Fractal\TransformerAbstract
{
	public function transform(User $user)
	{
		return [
			'id' => $user->id,
			'first_name' => $user->first_name,
			'last_name' => $user->last_name,
			'email' => $user->email
		];
	}
}