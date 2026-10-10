<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
  public function edit(): Response
  {
    return Inertia::render('profile');
  }

  public function update(Request $request): RedirectResponse
  {
    $data = $request->validate([
      'name' => ['required', 'string', 'max:255'],
      'email' => [
        'required', 'email', 'max:255',
        Rule::unique('users', 'email')->ignore($request->user()->id),
      ],
    ]);

    $request->user()->update($data);

    return back();
  }

  public function updatePassword(Request $request): RedirectResponse
  {
    $data = $request->validate([
      'current_password' => ['required', 'current_password'],
      'password' => ['required', 'confirmed', Password::defaults()],
    ]);

    $request->user()->update(['password' => $data['password']]); // hashed by model cast

    return back();
  }

  public function destroy(Request $request): RedirectResponse
  {
    $request->validate([
      'password' => ['required', 'current_password'],
    ]);

    $user = $request->user();

    Auth::logout();
    $user->delete();

    $request->session()->invalidate();
    $request->session()->regenerateToken();

    return redirect('/');
  }
}
