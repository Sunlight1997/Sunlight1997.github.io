'use client';

import Link from 'next/link';
import s from './Navbar.module.css';
import { useEffect, useState, useContext } from 'react';
import { Menu } from 'react-feather';
import NavItem from './NavItem';

import { navlinks } from 'shared/utils/paths';
import { PersonalDetails } from 'shared/utils/types';
import { PersonalDetailsContext } from 'shared/utils/contexts';
import { personalDetails } from 'shared/utils/consts';

const Navbar = () => {
  const { logo }: PersonalDetails = personalDetails;
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [isScreenScrolled, setisScreenScrolled] = useState(false);
  const addShadowtoNav = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    window.scrollY >= 100 ? setisScreenScrolled(true) : setisScreenScrolled(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', addShadowtoNav);
    return () => {
      window.removeEventListener('scroll', addShadowtoNav);
    };
  }, []);

  return (
    <div
      className={` mx-auto bg-blue w-full fixed z-30
      ${isScreenScrolled && 'shadow-2xl'}
      `}
    >
      <nav className="block md:flex justify-between items-center p-2 px-8">
        <div className="flex justify-between">
          <div>
            <Link href="/">
              <img
                src={logo}
                alt="logo"
                className={`${
                  isScreenScrolled ? 'w-1/5 md:w-3/12' : 'w-16 md:w-2/5'
                } pl-30 my-2 transition-all transform hover:scale-75 cursor-pointer`}
              />
            </Link>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-white focus:outline-none"
              onClick={() => setShowMobileNav(!showMobileNav)}
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
        <div className={showMobileNav ? 'block pt-3 transition-all' : 'hidden md:block'}>
          <ul className="md:flex md:flex-row border-pink border-2 md:border-none">
            {navlinks.map((item) => {
              return <NavItem title={item.title} href={item.href} key={item.href} />;
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
