'use client';
import { useState, useEffect } from 'react';
import {
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
} from '@nextui-org/navbar';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  const menuItems = ['Home', 'About', 'Program', 'Contact'];

  return (
    <Nav
      onMenuOpenChange={setIsMenuOpen}
      className={`fixed text-white shadow-none drop-shadow-none ${
        isAtTop ? 'bg-transparent backdrop-saturate-100' : 'bg-primary/80'
      }`}
      id='navbar'
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <Image
            src='/nu.svg'
            alt='Logo NU'
            width={100}
            height={100}
            className='w-12 md:w-16'
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden gap-4 sm:flex' justify='end'>
        {menuItems.map((item, index) => (
          <Link
            smooth={true}
            duration={1000}
            to={item}
            className='cursor-pointer font-normal hover:text-secondary'
            offset={item === 'Contact' ? -200 : 0}
            key={index}
          >
            {item}
          </Link>
        ))}
      </NavbarContent>

      {/* Mobile View */}
      <NavbarMenu
        className={`text-white shadow-none drop-shadow-none scrollbar-hide ${
          isAtTop ? 'bg-transparent backdrop-saturate-100' : 'bg-primary/80'
        }`}
      >
        {menuItems.map((item, index) => (
          <Link
            smooth={true}
            duration={1000}
            to={item}
            className='cursor-pointer font-normal hover:text-secondary'
            offset={item === 'Contact' ? -200 : 0}
            key={index}
          >
            {item}
          </Link>
        ))}
      </NavbarMenu>
    </Nav>
  );
}
