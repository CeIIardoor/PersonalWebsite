<?php

namespace App\Policies;

use App\Models\User;
use Auth;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;

    public function create(User $user)
    {
        return $user->email === 'demouser@example.com';
    }

    public function edit(User $user, User $model)
    {
        return 0;
    }
}
