import { PropsWithChildren, useState } from 'react';
import Sidebar from '@/components/dashboard/sidebar';
import Topbar from '@/components/dashboard/topbar';

export default function DashboardLayout({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-base-200 flex min-h-screen">
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar: fixed slide-in on mobile, always visible on lg+ */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 transition-transform lg:static lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Sidebar onNavigate={() => setOpen(false)} />
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar onMenuClick={() => setOpen(true)} />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
