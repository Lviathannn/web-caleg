import { Button, Image } from '@nextui-org/react';
import NextImage from 'next/image';

type Props = {};

export default function HomeSection({}: Props) {
  return (
    <section
      className='px-container lg:px-lg flex min-h-screen flex-col items-center justify-center gap-20 bg-gradient-to-b from-bg_start to-bg_end py-20 lg:py-32'
      id='home'
    >
      <div className='container flex h-full w-full flex-col items-center justify-center gap-10 lg:flex-row lg:justify-between'>
        <div className='flex flex-col items-center justify-center text-center lg:items-start lg:text-start'>
          <h1 className='text-hero-title text-white '>
            Azizah Mukarromah Calon DPRD Kabupaten Ciamis
          </h1>
          <h3 className='text-hero-subtitle max-w-lg pt-4'>
            Membangun Negeri Tanpa Melupakan Jati Diri Sebagai Muslimat Sejati
          </h3>
          <Button className='mt-5 bg-secondary text-white' size='lg'>
            Explore
          </Button>
        </div>
        <div className='relative '>
          <div
            className='absolute bottom-14 left-2 z-10 flex h-16 w-72 items-center justify-evenly gap-2 rounded-xl bg-white
          sm:-left-10'
          >
            <div className='flex h-8 w-8  items-center justify-center rounded-full bg-primary text-white'>
              03
            </div>
            <p className='text-primary-text text-base font-medium'>
              Azizah Mukarromah
            </p>
            <Image
              src='/nail.png'
              alt='Nail Image'
              className='h-6 w-6 rotate-[30deg] object-cover'
            />
          </div>
          <div
            className='absolute -bottom-5 right-2 z-10 flex h-16 w-72 items-center justify-evenly gap-2 rounded-xl bg-white
          sm:right-10'
          >
            <Image
              src='/pkb-color.svg'
              width={50}
              height={50}
              alt='Logo PKB'
              className='h-10 w-10'
            />
            <p className='text-primary-text text-base font-medium'>
              Partai Kebangkitan Bangsa
            </p>
            <Image
              src='/nail.png'
              alt='Nail Image'
              className='h-6 w-6 rotate-[30deg] object-cover'
            />
          </div>
          <div
            className='absolute right-2 top-64 z-10 flex h-16 w-64 items-center justify-evenly gap-2 rounded-xl bg-black
          sm:-right-10'
          >
            <Image
              src='/nu-color.svg'
              width={50}
              height={50}
              alt='Logo PKB'
              className='h-14 w-14'
            />
            <p className='text-base font-medium text-white'>Nahdhatul Ulama</p>
            <div className='h-3 w-3 rounded-full bg-primary'></div>
          </div>
          <div className='relative overflow-y-hidden rounded-2xl bg-white/20 backdrop-blur-lg'>
            <Image
              src='/image-3.png'
              alt='Hero Image'
              className=' relative -bottom-10 z-0 h-[520px] w-[450px] object-cover drop-shadow-2xl sm:h-[550px]'
            />
          </div>
        </div>
      </div>
      <div className=''>
        <p className='text-hero-subtitle pb-5 text-center md:pb-10'>
          Official Partner
        </p>
        <div className='flex h-full w-full flex-wrap items-center justify-center gap-5 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-24'>
          <Image
            src='/nu.svg'
            alt='Logo NU'
            as={NextImage}
            width={200}
            height={200}
            className='w-24 sm:w-28'
          />
          <Image
            src='/pkb.svg'
            alt='Logo NU'
            as={NextImage}
            width={200}
            height={200}
            className='w-20 sm:w-24'
          />
          <Image
            src='/muslimat.svg'
            alt='Logo NU'
            as={NextImage}
            width={200}
            height={200}
            className='w-32 sm:w-40'
          />
          <Image
            src='/anshor.png'
            alt='Logo NU'
            as={NextImage}
            width={200}
            height={200}
            className='w-[81px] sm:w-24'
          />
          <Image
            src='/fatayat.svg'
            alt='Logo NU'
            as={NextImage}
            width={200}
            height={200}
            className='w-[75px] sm:w-[85px]'
          />
        </div>
      </div>
    </section>
  );
}
