'use client';
import ButtonLinkComponent from '@/components/ButtonLinkComponent';
import { Image } from '@nextui-org/react';
import { ClipboardCheck } from 'lucide-react';
import NextImage from 'next/image';

type Props = {};

export default function ContributeSection({}: Props) {
  return (
    <section className='p-container flex flex-col items-center justify-center lg:flex-row lg:justify-between lg:gap-10'>
      <Image
        src='/contribute.svg'
        alt='Azizah Mukarromah Image'
        as={NextImage}
        width={500}
        height={500}
        className='h-[400px] w-[400px] object-cover sm:h-[600px] sm:w-[600px] lg:h-[500px] lg:w-[500px] xl:h-[550px] xl:w-[550px]'
      />
      <div className='lg:max-w-lg xl:max-w-2xl'>
        <p className='text-medium text-slate-500 md:text-lg'>
          Contribute For Us{' '}
        </p>
        <h1 className='text-hero-title mt-3'>Ayo Bergabung Bersama Kami</h1>
        <p className='mt-8 text-slate-700'>
          Jadilah Bagian dari Perubahan! Kami membutuhkan semangat, energi, dan
          kemampuan Anda untuk menjadikan visi kami menjadi kenyataan.
          Bergabunglah dengan kami sebagai relawan dan berkontribusi dalam
          mewujudkan masa depan yang lebih baik bagi kita semua. Bersama, kita
          dapat menciptakan perubahan yang positif. Ayo bergabung dan wujudkan
          perubahan bersama kami!
        </p>
        <ButtonLinkComponent
          caption='Daftar Relawan'
          to='Contact'
          Icon={ClipboardCheck}
          offset={-200}
        />
      </div>
    </section>
  );
}
