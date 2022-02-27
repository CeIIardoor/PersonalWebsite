<?php

namespace App\Http\Controllers;
use DB;
use Request;

class ContactController extends Controller
{
    public function store()
    {
        $attributes = Request::validate([
            'name' => 'required',
            'email' => ['required','email'],
            'message' => 'required',
        ]);
        $attributes['created_at'] = \Carbon\Carbon::now()->toDateTimeString();
        DB::table('contacts')->insert($attributes);

        return inertia('LandingPage/ThankYou');
    }
}
