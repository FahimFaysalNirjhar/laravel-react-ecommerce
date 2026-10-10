<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Inertia\Response;

class AuthController extends Controller
{
  public function showLogin(): Response
  {
    return Inertia::render('auth/login');
  }

  public function login(Request $request): RedirectResponse
  {
    $credentials = $request->validate([
      'email' => ['required', 'email'],
      'password' => ['required'],
    ]);

    if (! Auth::attempt($credentials, $request->boolean('remember'))) {
      return back()->withErrors([
        'email' => 'These credentials do not match our records.',
      ])->onlyInput('email');
    }

    $request->session()->regenerate();

    return redirect()->intended('/dashboard');
  }

  public function showRegister(): Response
  {
    return Inertia::render('auth/register');
  }

  public function register(Request $request): RedirectResponse
  {
    $data = $request->validate([
      'name' => ['required', 'string', 'max:255'],
      'email' => ['required', 'email', 'max:255', 'unique:users,email'],
      'password' => ['required', 'confirmed', Password::defaults()],
    ]);

    $user = User::query()->create($data); // password is auto-hashed by the User model cast

    Auth::login($user);
    $request->session()->regenerate();

    return redirect('/dashboard');
  }

  public function logout(Request $request): RedirectResponse
  {
    Auth::logout();

    $request->session()->invalidate();
    $request->session()->regenerateToken();

    return redirect('/');
  }
}
