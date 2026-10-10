import { Head, Link, useForm } from '@inertiajs/react';
import { FormEvent } from 'react';

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    post('/register', {
      onFinish: () => reset('password', 'password_confirmation'),
    });
  };

  return (
    <>
      <Head title="Register" />
      <div className="mx-auto mt-20 max-w-sm p-6">
        <h1 className="mb-6 text-2xl font-semibold">Create account</h1>

        <form onSubmit={submit} className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm">Name</label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              className="w-full rounded border px-3 py-2"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
              required
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm">Email</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              className="w-full rounded border px-3 py-2"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              required
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password" className="mb-1 block text-sm">Password</label>
            <input
              id="password"
              type="password"
              autoComplete="new-password"
              className="w-full rounded border px-3 py-2"
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              required
            />
            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
          </div>

          <div>
            <label htmlFor="password_confirmation" className="mb-1 block text-sm">
              Confirm password
            </label>
            <input
              id="password_confirmation"
              type="password"
              autoComplete="new-password"
              className="w-full rounded border px-3 py-2"
              value={data.password_confirmation}
              onChange={(e) => setData('password_confirmation', e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={processing}
            className="w-full rounded bg-black py-2 text-white disabled:opacity-50"
          >
            {processing ? 'Creating...' : 'Register'}
          </button>
        </form>

        <p className="mt-4 text-sm">
          Already registered? <Link href="/login" className="underline">Log in</Link>
        </p>
      </div>
    </>
  );
}
