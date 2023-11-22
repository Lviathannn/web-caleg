import AccordionComponents from '@/components/AccordionComponents';
import { Button, Link } from '@nextui-org/react';
import { Phone } from 'lucide-react';

type Props = {};

export default function FaqSection({}: Props) {
  return (
    <section className='p-container flex flex-col items-center justify-between gap-10 py-20'>
      <div className='mb-10 flex w-full flex-col  items-center justify-center gap-2'>
        <h1 className='text-primary-text text-hero-title'>FAQ & Contact</h1>
        <h2 className='text-center text-lg text-slate-500 md:text-xl'>
          Pertanyaan Yang Sering Ditanyakan
        </h2>
      </div>
      <div className='w-full lg:w-[80%]'>
        <AccordionComponents />
      </div>
      <div
        className=' flex w-full flex-col items-center justify-center gap-5 rounded-2xl bg-primary px-5 py-10 md:flex-row md:justify-between lg:w-[80%]'
        id='Contact'
      >
        <div className='flex flex-col items-center justify-center md:items-start'>
          <h1 className=' text-3xl font-bold text-white'>
            Bergabung Menjadi Relawan
          </h1>
          <p className='text-lg text-white'>Ayo Bergabung Bersama Kami</p>
        </div>
        <Button
          className='bg-black text-white'
          startContent={<Phone size={20} />}
          size='lg'
          href='https://wa.link/gx3l79'
          as={Link}
          target='_blank'
        >
          Gabung Via Whatsapps
        </Button>
      </div>
    </section>
  );
}
