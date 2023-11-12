import { Button, Image } from "@nextui-org/react";

type Props = {};

export default function HomeSection({}: Props) {
  return (
    <section
      className="min-h-screen bg-gradient-to-b from-bg_start to-bg_end px-container py-20 lg:py-32 lg:px-lg flex justify-center"
      id="home"
    >
      <div className="flex flex-col lg:flex-row lg:justify-between  w-full h-full container justify-center items-center gap-10">
        <div className="text-center lg:text-start">
          <h1 className="text-white text-hero-title ">Azizah Mukarromah Pemimpin Masa Depan</h1>
          <h3 className="text-white pt-4 text-hero-subtitle">
            Membangun Negeri Tanpa Lupa Jati Diri Sebagai Muslimah Sejati
          </h3>
          <Button className="mt-5 bg-secondary text-white" size="lg">
            Explore
          </Button>
        </div>
        <div className="relative">
          <div
            className="absolute w-72 h-16 bg-white rounded-xl bottom-14 left-2 sm:-left-10 z-10 flex justify-evenly items-center
          gap-2"
          >
            <div className="rounded-full w-8 h-8 bg-primary text-white flex justify-center items-center">
              03
            </div>
            <p className="text-primary-text font-medium text-base">Azizah Mukarromah</p>
            <Image
              src="/nail.png"
              alt="Nail Image"
              className="object-cover w-6 h-6 rotate-[30deg]"
            />
          </div>
          <div
            className="absolute w-72 h-16 bg-white rounded-xl -bottom-5 sm:right-10 right-2 z-10 flex justify-evenly items-center
          gap-2"
          >
            <Image
              src="/pkb-color.svg"
              width={50}
              height={50}
              alt="Logo PKB"
              className="w-10 h-10"
            />
            <p className="text-primary-text font-medium text-base">Partai Kebangkitan Bangsa</p>
            <Image
              src="/nail.png"
              alt="Nail Image"
              className="object-cover w-6 h-6 rotate-[30deg]"
            />
          </div>
          <div
            className="absolute w-64 h-16 bg-black rounded-xl top-64 right-2 sm:-right-10 z-10 flex justify-evenly items-center
          gap-2"
          >
            <Image
              src="/nu-color.svg"
              width={50}
              height={50}
              alt="Logo PKB"
              className="w-14 h-14"
            />
            <p className="text-white font-medium text-base">Nahdhatul Ulama</p>
            <div className="w-3 h-3 bg-primary rounded-full"></div>
          </div>
          <div className="bg-tertiary rounded-2xl relative overflow-y-hidden">
            <Image
              src="/image-3.png"
              alt="Hero Image"
              className=" z-0 relative -bottom-10 drop-shadow-2xl w-[450px] h-[520px] sm:h-[550px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
