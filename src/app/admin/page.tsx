import { redirect } from 'next/navigation';
import { Metadata } from 'next';

import { GuestbookAdminForm } from '@/app/admin/guestbookAdminForm';
import { auth } from '@/lib/auth';
import { getGuestbookEntries } from '@/lib/dataBaseQueries';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Site Admin',
  robots: {
    index: false,
    follow: false,
    nocache: false,
  },
};

// Needs admin session
export default async function Page() {
  const session = await auth();
  
  if (!siteConfig.admins.includes(session?.user?.email || '')) {
    redirect('/');
  }
  
  const entries = await getGuestbookEntries();

  return (
    <div className="mx-auto px-4 mb-16 max-w-prose">
      <h1 className="scroll-m-20 text-2xl font-semibold tracking-wide text-primary uppercase my-6">Admin</h1>
      <h2 className="scroll-m-20 border-b border-border pb-1 text-3xl font-semibold tracking-tight mt-6 mb-2">Guestbook</h2>
      <GuestbookAdminForm entries={entries}/>
    </div>
  );
}