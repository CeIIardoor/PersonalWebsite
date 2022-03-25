<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'LandingPage/Index');
Route::inertia('/contact', 'LandingPage/Contact');
Route::post('/contact', [ContactController::class, 'store']);