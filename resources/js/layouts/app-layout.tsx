import { PropsWithChildren } from 'react';
import Navbar from '@/components/navbar';

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="bg-base-200 min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-6xl p-6">{children}</main>
    </div>
  );
}
