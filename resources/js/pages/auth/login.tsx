import { Head, Link, useForm } from '@inertiajs/react';
import { FormEvent } from 'react';

export default function Login() {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    post('/login', { onFinish: () => reset('password') });
  };

  return (
    <>
      <Head title="Log in" />
      <div className="mx-auto mt-20 max-w-sm p-6">
        <h1 className="mb-6 text-2xl font-semibold">Log in</h1>

        <form onSubmit={submit} className="space-y-4">
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
              autoComplete="current-password"
              className="w-full rounded border px-3 py-2"
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              required
            />
            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
          </div>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={data.remember}
              onChange={(e) => setData('remember', e.target.checked)}
            />
            Remember me
          </label>

          <button
            type="submit"
            disabled={processing}
            className="w-full rounded bg-black py-2 text-white disabled:opacity-50"
          >
            {processing ? 'Logging in...' : 'Log in'}
          </button>
        </form>

        <p className="mt-4 text-sm">
          No account? <Link href="/register" className="underline">Register</Link>
        </p>
      </div>
    </>
  );
}
