'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import ThemeChanger from '@/components/themeChanger';
import { HeartIcon } from 'lucide-react';

const navItems = [
  { href: '/about', label: 'About' },
  { href: '/guestbook', label: 'GuestBook' },
];

export default function NavBar() {
  const [triggered, setTriggered] = useState(false);

  return (
    <nav className="bg-background/80 backdrop-blur-sm lg:sticky top-0 h-fit z-50">
      <div className="my-4 max-w-prose lg:max-w-6xl mx-auto flex flex-row items-center justify-between px-4">
        <div className="place-items-center text-primary hover:text-primary/80 transition-all font-extrabold text-lg gap-2 flex flex-row items-center">
          <Link href="/" className="flex flex-row items-center gap-2">
            <HeartIcon className="flex-none"/>
            Rehab Society
          </Link>
        </div>
        <div className="flex flex-row place-items-center gap-4">
          <div><ThemeChanger/></div>
          <div className="hidden lg:flex flex-row gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-center hover:text-primary/80 transition-all"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex lg:hidden">
            <DropdownMenu onOpenChange={() => setTriggered(triggered ? false : true)}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="dropdown menu for linking the website">
                  {triggered === true ? (
                    <Cross1Icon stroke="currentColor" strokeWidth="1px"/>
                  ) : (
                    <HamburgerMenuIcon stroke="currentColor" strokeWidth="1px"/>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {navItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild className="text-md font-medium">
                    <Link
                      href={`${item.href}`}
                    >
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}