import { Head, usePage } from '@inertiajs/react';
import DashboardLayout from '@/layouts/dashboard-layout';

type PageProps = { auth: { user: { name: string } } };

export default function Dashboard() {
  const { auth } = usePage<PageProps>().props;

  return (
    <DashboardLayout>
      <Head title="Dashboard" />

      <h1 className="mb-6 text-2xl font-bold">Welcome back, {auth.user.name}</h1>

      <div className="grid gap-4 sm:grid-cols-3">
        {['Orders', 'Wishlist', 'Cart items'].map((label) => (
          <div key={label} className="card bg-base-100 shadow">
            <div className="card-body">
              <h2 className="card-title text-base">{label}</h2>
              <p className="text-3xl font-bold">0</p>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
