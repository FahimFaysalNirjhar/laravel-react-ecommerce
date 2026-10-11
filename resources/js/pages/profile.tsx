import { Head } from '@inertiajs/react';
import DeleteUserForm from '@/components/profile/delete-user-form';
import UpdatePasswordForm from '@/components/profile/update-password-form';
import UpdateProfileInformationForm from '@/components/profile/update-profile-information-form';
import PageHeader from '@/components/page-header';
import DashboardLayout from '@/layouts/dashboard-layout';

export default function Profile() {
  return (
    <DashboardLayout>
      <Head title="Profile" />
      <PageHeader title="Profile" />

      <div className="max-w-2xl space-y-6">
        <UpdateProfileInformationForm />
        <UpdatePasswordForm />
        <DeleteUserForm />
      </div>
    </DashboardLayout>
  );
}
