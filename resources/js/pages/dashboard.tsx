import { Head } from '@inertiajs/react';
import PageHeader from '@/components/page-header';
import StatCard from '@/components/stat-card';
import { useRequiredUser } from '@/hooks/use-auth';
import DashboardLayout from '@/layouts/dashboard-layout';

export default function Dashboard() {
  const user = useRequiredUser();

  return (
    <DashboardLayout>
      <Head title="Dashboard" />
      <PageHeader title={`Welcome back, ${user.name}`} />

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Orders" value={0} />
        <StatCard label="Wishlist" value={0} />
        <StatCard label="Cart items" value={0} />
      </div>
    </DashboardLayout>
  );
}
