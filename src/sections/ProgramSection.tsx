'use client';
import CardComponent from '@/components/CardComponent';
import { motion } from 'framer-motion';

type Props = {};
const variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const program = [
  {
    id: 1,
    title: 'Pemberdayaan Pendidikan Keagamaan',
    content:
      'Melalui program ini, Azizah akan memperkuat institusi pendidikan keagamaan di daerah ini. Ini termasuk dukungan untuk sekolah-sekolah agama, pelatihan guru keagamaan, dan fasilitas yang memadai untuk mendukung pembelajaran keagamaan.',
    image: 'program-1',
  },
  {
    id: 2,
    title: 'Pendidikan Berkualitas',
    content:
      'Azizah berkomitmen untuk mendorong pemerintah agar menyediakan pendidikan berkualitas yang mengintegrasikan nilai-nilai keagamaan. Dengan mendukung kurikulum yang mencakup aspek spiritual dan moral, Azizah ingin membentuk generasi penerus yang cerdas dan berintegritas.',
    image: 'program-2',
  },
  {
    id: 3,
    title: 'Forum Diskusi Keagamaan',
    content:
      'Azizah akan menyelenggarakan forum diskusi terbuka untuk membahas isu-isu keagamaan dan pendidikan. Ini memberikan ruang bagi dialog antar komunitas dan memberikan pemahaman yang lebih baik tentang peran keagamaan dalam menciptakan harmoni sosial.',
    image: 'program-3',
  },
];

export default function ProgramSection({}: Props) {
  return (
    <section className='p-container flex flex-col items-center justify-between gap-10 bg-bg_secondary py-20'>
      <div className='mb-10 flex flex-col items-center  justify-center gap-2'>
        <h1 className='text-primary-text text-hero-title '>Program Unggulan</h1>
        <h2 className='text-center text-lg text-slate-500 md:text-xl'>
          komitmen Azizah Untuk Membawa Perubahan Positif Bagi Masyarakat
        </h2>
      </div>
      <motion.div
        className='grid-col-1 grid h-full w-full content-center gap-5 md:grid-cols-2 xl:grid-cols-3'
        variants={variants}
        initial='hidden'
        whileInView='visible'
        transition={{ staggerChildren: 0.4 }}
        viewport={{ once: true }}
      >
        {program.map((item) => (
          <motion.div
            variants={childVariants}
            key={item.id}
            transition={{ delay: 0.2 * item.id }}
          >
            <CardComponent
              image={item.image}
              title={item.title}
              content={item.content}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
