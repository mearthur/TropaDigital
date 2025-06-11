'use client';
import Link from 'next/link';
import { Button } from './button';
import { usePathname } from 'next/navigation';

interface SidebarButtonProps {
  children: React.ReactNode;
  href: string;
}

export default function SidebarButton({ href, children }: SidebarButtonProps) {
  const pathname = usePathname();
  return (
    <Button
      variant={pathname === `${href}` ? 'secondary' : 'ghost'}
      className="flex items-center justify-start gap-2 sm:justify-center"
      asChild
    >
      <Link href={href} className="flex h-11 w-11 md:h-auto md:w-full md:justify-start">
        {children}
      </Link>
    </Button>
  );
}
