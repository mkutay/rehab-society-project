'use server';

import { sql } from '@/lib/postgres';

import { entryType } from '@/config/schema';

export async function getGuestbookEntries(): Promise<
  entryType[]
> {
  if (!process.env.POSTGRES_URL) {
    return [];
  }

  return sql`
    SELECT id, body, created_by, created_at, updated_at, email, color
    FROM guestbook
    ORDER BY created_at DESC
    LIMIT 300;
  `;
}