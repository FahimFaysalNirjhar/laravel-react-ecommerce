<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware('guest')->group(function () {
  Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
  Route::post('/login', [AuthController::class, 'login'])->middleware('throttle:5,1');

  Route::get('/register', [AuthController::class, 'showRegister'])->name('register');
  Route::post('/register', [AuthController::class, 'register']);
});

Route::middleware('auth')->group(function () {
  Route::inertia('/dashboard', 'dashboard')->name('dashboard');

  Route::get('/profile', [ProfileController::class, 'edit'])->name('profile');
  Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
  Route::put('/profile/password', [ProfileController::class, 'updatePassword'])->name('profile.password');
  Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

  Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
});
