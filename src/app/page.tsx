import AboutSection from "@/sections/AboutSection";
import HomeSection from "@/sections/HomeSection";
import ProgramSection from "@/sections/ProgramSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HomeSection />
      <AboutSection />
      <ProgramSection />
    </main>
  );
}
