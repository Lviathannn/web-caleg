import AboutSection from '@/sections/AboutSection';
import ContributeSection from '@/sections/ContributeSection';
import HomeSection from '@/sections/HomeSection';
import ProgramSection from '@/sections/ProgramSection';
import VisiMisiSection from '@/sections/VisiMisiSection';

export default function Home() {
  return (
    <main className='overflow-x-hidden'>
      <HomeSection />
      <AboutSection />
      <VisiMisiSection />
      <ContributeSection />
      <ProgramSection />
    </main>
  );
}
