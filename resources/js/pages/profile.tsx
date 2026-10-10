import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEvent, useRef } from 'react';
import DangerButton from '@/components/buttons/danger-button';
import FormField from '@/components/form/form-field';
import PrimaryButton from '@/components/buttons/primary-button';
import SecondaryButton from '@/components/buttons/secondary-button';
import SectionCard from '@/components/section-card';
import DashboardLayout from '@/layouts/dashboard-layout';

type PageProps = {
  auth: { user: { name: string; email: string } };
};

export default function Profile() {
  const { auth } = usePage<PageProps>().props;
  const deleteModal = useRef<HTMLDialogElement>(null);

  // Profile info
  const info = useForm({ name: auth.user.name, email: auth.user.email });
  const saveInfo = (e: FormEvent) => {
    e.preventDefault();
    info.patch('/profile', { preserveScroll: true });
  };

  // Password
  const pw = useForm({ current_password: '', password: '', password_confirmation: '' });
  const savePassword = (e: FormEvent) => {
    e.preventDefault();
    pw.put('/profile/password', {
      preserveScroll: true,
      onSuccess: () => pw.reset(),
      onError: () => pw.reset('password', 'password_confirmation'),
    });
  };

  // Delete account
  const del = useForm({ password: '' });
  const closeModal = () => {
    deleteModal.current?.close();
    del.reset();
    del.clearErrors();
  };
  const deleteAccount = (e: FormEvent) => {
    e.preventDefault();
    del.delete('/profile', {
      preserveScroll: true,
      onError: () => del.reset('password'),
    });
  };

  return (
    <DashboardLayout>
      <Head title="Profile" />

      <h1 className="mb-6 text-2xl font-bold">Profile</h1>

      <div className="max-w-2xl space-y-6">
        <SectionCard
          title="Profile information"
          description="Update your name and email address."
        >
          <form onSubmit={saveInfo} className="space-y-4">
            <FormField
              label="Name"
              autoComplete="name"
              value={info.data.name}
              onChange={(e) => info.setData('name', e.target.value)}
              error={info.errors.name}
              required
            />
            <FormField
              label="Email"
              type="email"
              autoComplete="email"
              value={info.data.email}
              onChange={(e) => info.setData('email', e.target.value)}
              error={info.errors.email}
              required
            />
            <div className="flex items-center gap-3">
              <PrimaryButton type="submit" loading={info.processing}>
                Save
              </PrimaryButton>
              {info.recentlySuccessful && (
                <span className="text-success text-sm">Saved.</span>
              )}
            </div>
          </form>
        </SectionCard>

        <SectionCard
          title="Update password"
          description="Use a long, random password to keep your account secure."
        >
          <form onSubmit={savePassword} className="space-y-4">
            <FormField
              label="Current password"
              type="password"
              autoComplete="current-password"
              value={pw.data.current_password}
              onChange={(e) => pw.setData('current_password', e.target.value)}
              error={pw.errors.current_password}
            />
            <FormField
              label="New password"
              type="password"
              autoComplete="new-password"
              value={pw.data.password}
              onChange={(e) => pw.setData('password', e.target.value)}
              error={pw.errors.password}
            />
            <FormField
              label="Confirm new password"
              type="password"
              autoComplete="new-password"
              value={pw.data.password_confirmation}
              onChange={(e) => pw.setData('password_confirmation', e.target.value)}
              error={pw.errors.password_confirmation}
            />
            <div className="flex items-center gap-3">
              <PrimaryButton type="submit" loading={pw.processing}>
                Update password
              </PrimaryButton>
              {pw.recentlySuccessful && (
                <span className="text-success text-sm">Password updated.</span>
              )}
            </div>
          </form>
        </SectionCard>

        <SectionCard
          title="Delete account"
          description="Once your account is deleted, all of its data is permanently removed. This cannot be undone."
          className="border-error border"
        >
          <DangerButton type="button" onClick={() => deleteModal.current?.showModal()}>
            Delete account
          </DangerButton>
        </SectionCard>
      </div>

      {/* Confirm modal */}
      <dialog ref={deleteModal} className="modal" onClose={closeModal}>
        <form onSubmit={deleteAccount} className="modal-box space-y-4">
          <h3 className="text-lg font-bold">Delete your account?</h3>
          <p className="text-sm">
            This permanently deletes your account and data. Enter your password to confirm.
          </p>

          <FormField
            label="Password"
            type="password"
            autoComplete="current-password"
            value={del.data.password}
            onChange={(e) => del.setData('password', e.target.value)}
            error={del.errors.password}
          />

          <div className="modal-action">
            <SecondaryButton type="button" onClick={closeModal}>
              Cancel
            </SecondaryButton>
            <DangerButton type="submit" disabled={del.processing}>
              Delete account
            </DangerButton>
          </div>
        </form>

        <form method="dialog" className="modal-backdrop">
          <button type="submit">close</button>
        </form>
      </dialog>
    </DashboardLayout>
  );
}
