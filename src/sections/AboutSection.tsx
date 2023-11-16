import { Button, Image } from '@nextui-org/react';
import { ClipboardEdit } from 'lucide-react';

type Props = {};

export default function AboutSection({}: Props) {
  return (
    <section className='px-container py-20'>
      <div className='flex flex-col items-stretch justify-center gap-14 lg:flex-row lg:items-center lg:justify-between'>
        <div className='lg:max-w-xl xl:max-w-2xl'>
          <h1 className='text-hero-title text-primary-text'>
            Siapa Itu Azizah Mukarromah?
          </h1>
          <p className='text-primary-text mt-5 text-medium'>
            Azizah Mukarromah adalah seorang aktifis yang mencuat dalam dunia
            kegiatan keagamaan dan kewanitaan, terlibat dengan berbagai
            organisasi. Dedikasinya tidak hanya terbatas pada keikutsertaannya,
            tetapi juga pada peran kunci dalam memperkuat nilai-nilai keagamaan
            dan mengadvokasi hak-hak perempuan, menjadikannya sosok inspiratif
            di kancah perubahan sosial.
          </p>
          <Button
            className='mt-5 bg-secondary text-white'
            radius='sm'
            startContent={<ClipboardEdit />}
            size='lg'
          >
            Daftar Sebagai Relawan
          </Button>
        </div>
        <div className='relative'>
          <div className='flex items-center justify-center rounded-2xl bg-gradient-to-b from-bg_start to-bg_end'>
            <Image
              src='/image-1.png'
              alt='Azizah Mukarromah'
              className='z-0 h-[520px] w-[450px] object-cover sm:h-[550px]'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
