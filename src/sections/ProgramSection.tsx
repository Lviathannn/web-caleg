import CardComponent from '@/components/CardComponent';

type Props = {};

export default function ProgramSection({}: Props) {
  return (
    <section className='p-container flex flex-col items-center justify-between gap-10 bg-bg_secondary py-20'>
      <div className='mb-10 flex flex-col items-center  justify-center gap-2'>
        <h1 className='text-primary-text text-hero-title '>Program Unggulan</h1>
        <h2 className='text-center text-lg text-slate-500 md:text-xl'>
          komitmen Azizah Untuk Membawa Perubahan Positif Bagi Masyarakat
        </h2>
      </div>
      <div className='grid-col-1 grid h-full w-full content-center gap-5 md:grid-cols-2 xl:grid-cols-3 '>
        <CardComponent
          image='program-1'
          title='Pemberdayaan Pendidikan Keagamaan'
          content='Melalui program ini, Azizah akan memperkuat institusi pendidikan keagamaan di daerah ini. Ini termasuk dukungan untuk sekolah-sekolah agama, pelatihan guru keagamaan, dan fasilitas yang memadai untuk mendukung pembelajaran keagamaan.'
        />
        <CardComponent
          image='program-2'
          title='Pendidikan Berkualitas'
          content='Azizah berkomitmen untuk menyediakan pendidikan berkualitas yang mengintegrasikan nilai-nilai keagamaan. Dengan mendukung kurikulum yang mencakup aspek spiritual dan moral, Azizah ingin membentuk generasi penerus yang cerdas dan berintegritas.'
        />
        <CardComponent
          image='program-3'
          title='Forum Diskusi Keagamaan '
          content='Azizah akan menyelenggarakan forum diskusi terbuka untuk membahas isu-isu keagamaan dan pendidikan. Ini memberikan ruang bagi dialog antar komunitas dan memberikan pemahaman yang lebih baik tentang peran keagamaan dalam menciptakan harmoni sosial.'
        />
      </div>
    </section>
  );
}
