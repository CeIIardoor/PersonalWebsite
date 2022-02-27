<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;

Route::get('login', [LoginController::class, 'create'])->name('login');
Route::post('login', [LoginController::class, 'store']);
Route::post('logout', [LoginController::class, 'destroy'])->middleware('auth');
Route::inertia('/', 'LandingPage/Index');
Route::inertia('/contact', 'LandingPage/Contact');
Route::post('/contact', [ContactController::class, 'store']);
// Route::inertia('/thankyou', 'LandingPage/ThankYou');


Route::middleware(['auth'])->group(function () {
    Route::inertia('/home', 'Home');
    Route::inertia('/settings', 'Settings');

    Route::get('/users', [UsersController::class, 'index']);
    Route::get('/users/create', [UsersController::class, 'create']);
    Route::post('/users', [UsersController::class, 'store']);
});