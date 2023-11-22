import Tabs from '@/components/Tabs';

type Props = {};

export default function VisiMisiSection({}: Props) {
  return (
    <section className='p-container flex flex-col items-center justify-between gap-10 bg-bg_secondary py-20'>
      <div className='mb-10 flex flex-col items-center  justify-center gap-2'>
        <h1 className='text-primary-text text-hero-title '>Visi & Misi</h1>
        <h2 className='text-center text-lg text-slate-500 md:text-xl'>
          Dalam perjalanan menuju kesejahteraan masyarakat, Azizah berkomitmen
          Untuk
        </h2>
      </div>
      <Tabs />
    </section>
  );
}
