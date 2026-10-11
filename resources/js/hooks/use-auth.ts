import { usePage } from '@inertiajs/react';

export type AuthUser = { id: number; name: string; email: string };

type SharedProps = {
  name: string;
  auth: { user: AuthUser | null };
};

export function useAuth(): AuthUser | null {
  return usePage<SharedProps>().props.auth.user;
}

/** For pages behind the `auth` middleware, where the user always exists. */
export function useRequiredUser(): AuthUser {
  const user = useAuth();
  if (!user) throw new Error('Authenticated user is required on this page.');
  return user;
}

export function useAppName(): string {
  return usePage<SharedProps>().props.name;
}
