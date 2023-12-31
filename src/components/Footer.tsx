'use client';
import { Link } from 'react-scroll';

type Props = {};

export default function Footer({}: Props) {
  const menuItems = ['Home', 'About', 'Program', 'Contact'];

  return (
    <footer className='p-container flex flex-col gap-10 border-t-1 py-10 lg:py-14'>
      <div className=' flex flex-col justify-evenly gap-10 md:flex-row'>
        <div className='flex flex-col'>
          <h2 className='text-primary-text text-xl'>Azizah Mukarromah</h2>
          <h3 className='text-primary-text text-medium font-light'>
            Calon Anggota DPRD Kabupaten Ciamis
          </h3>
        </div>
        <div className='flex flex-col gap-3'>
          <h2 className='text-primary-text text-xl'>Links</h2>
          <div className='text-primary-text flex flex-col gap-1 font-light'>
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
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <h2 className='text-primary-text text-xl'>Information</h2>
          <div className='text-primary-text flex flex-col gap-1 font-light'>
            <span>Banjaranyar - Ciamis</span>
            <span>Jawa Barat - Indonesia</span>
            <span>+62-8522-1609-712</span>
            <span>azizahmukarromah@gmail.com</span>
          </div>
        </div>
      </div>
      <p className='border-t-1 pt-10 text-center text-sm'>
        © 2023 Azizah Mukarromah. All rights reserved
      </p>
    </footer>
  );
}
