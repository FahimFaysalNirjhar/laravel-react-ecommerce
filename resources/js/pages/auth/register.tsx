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
      <div className="bg-base-200 flex min-h-screen items-center justify-center p-6">
        <div className="card bg-base-100 w-full max-w-sm shadow-xl">
          <div className="card-body">
            <h1 className="card-title mb-2 text-2xl">
              Create account
            </h1>

            <form onSubmit={submit} className="space-y-4">
              <fieldset className="fieldset">
                <label htmlFor="name" className="label">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  className={`input w-full ${errors.name ? 'input-error' : ''}`}
                  value={data.name}
                  onChange={(e) =>
                    setData('name', e.target.value)
                  }
                  required
                />
                {errors.name && (
                  <p className="text-error text-sm">
                    {errors.name}
                  </p>
                )}
              </fieldset>

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
                  autoComplete="new-password"
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

              <fieldset className="fieldset">
                <label
                  htmlFor="password_confirmation"
                  className="label"
                >
                  Confirm password
                </label>
                <input
                  id="password_confirmation"
                  type="password"
                  autoComplete="new-password"
                  placeholder="••••••••"
                  className="input w-full"
                  value={data.password_confirmation}
                  onChange={(e) =>
                    setData(
                      'password_confirmation',
                      e.target.value,
                    )
                  }
                  required
                />
              </fieldset>

              <button
                type="submit"
                disabled={processing}
                className="btn btn-neutral w-full"
              >
                {processing && (
                  <span className="loading loading-spinner loading-sm" />
                )}
                {processing ? 'Creating...' : 'Register'}
              </button>
            </form>

            <p className="mt-2 text-center text-sm">
              Already registered?{' '}
              <Link href="/login" className="link link-neutral">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
