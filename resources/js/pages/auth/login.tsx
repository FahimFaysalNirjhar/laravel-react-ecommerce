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
      <div className="bg-base-200 flex min-h-screen items-center justify-center p-6">
        <div className="card bg-base-100 w-full max-w-sm shadow-xl">
          <div className="card-body">
            <h1 className="card-title mb-2 text-2xl">Log in</h1>

            <form onSubmit={submit} className="space-y-4">
              <fieldset className="fieldset">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={`input w-full ${errors.email ? 'input-error' : ''}`}
                  value={data.email}
                  onChange={(e) =>
                    setData('email', e.target.value)
                  }
                  required
                />
                {errors.email && (
                  <p className="text-error text-sm">
                    {errors.email}
                  </p>
                )}
              </fieldset>

              <fieldset className="fieldset">
                <label htmlFor="password" className="label">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className={`input w-full ${errors.password ? 'input-error' : ''}`}
                  value={data.password}
                  onChange={(e) =>
                    setData('password', e.target.value)
                  }
                  required
                />
                {errors.password && (
                  <p className="text-error text-sm">
                    {errors.password}
                  </p>
                )}
              </fieldset>

              <label className="flex cursor-pointer items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm"
                  checked={data.remember}
                  onChange={(e) =>
                    setData('remember', e.target.checked)
                  }
                />
                Remember me
              </label>

              <button
                type="submit"
                disabled={processing}
                className="btn btn-neutral w-full"
              >
                {processing && (
                  <span className="loading loading-spinner loading-sm" />
                )}
                {processing ? 'Logging in...' : 'Log in'}
              </button>
            </form>

            <p className="mt-2 text-center text-sm">
              No account?{' '}
              <Link href="/register" className="link link-primary">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
