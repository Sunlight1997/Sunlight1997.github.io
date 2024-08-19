'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  href: string;
  title: string;
};

const NavItem = ({ href, title }: Props): JSX.Element => {
  const pathname = usePathname();
  console.log(pathname, href)
  return (
    <Link href={href}>
      <li
        className={`
            px-5 py-2 pt-1 md:pt-4 md:px-4 md:text-center
            ${pathname === href ? 'border-b-2 md:border-none' : ''} 
            `}
      >
        <p className="transition duration-500 ease-in-out transform md:hover:-translate-y-2 text-white font-bold md:hover:text-violet">
          {title}
        </p>
        <img
          src="/images/vectors/nav_active.svg"
          alt="nav-active"
          className={`
              md:block md:opacity-0
              ${pathname === href && 'md:opacity-100 md:w-100'}
              `}
        />
      </li>
    </Link>
  );
};

export default NavItem;
