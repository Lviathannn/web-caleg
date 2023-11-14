import { Button, Image } from "@nextui-org/react";
import NextImage from "next/image";

type Props = {};

export default function HomeSection({}: Props) {
  return (
    <section
      className="min-h-screen bg-gradient-to-b from-bg_start to-bg_end px-container py-20 lg:py-32 lg:px-lg flex justify-center items-center flex-col gap-20"
      id="home"
    >
      <div className="flex flex-col lg:flex-row lg:justify-between w-full h-full container justify-center items-center gap-10">
        <div className="text-center lg:text-start flex flex-col justify-center items-center lg:items-start">
          <h1 className="text-white text-hero-title ">
            Azizah Mukarromah Calon DPRD Kabupaten Ciamis
          </h1>
          <h3 className="pt-4 text-hero-subtitle max-w-lg">
            Membangun Negeri Tanpa Melupakan Jati Diri Sebagai Muslimat Sejati
          </h3>
          <Button className="mt-5 bg-secondary text-white" size="lg">
            Explore
          </Button>
        </div>
        <div className="relative ">
          <div
            className="absolute w-72 h-16 bg-white rounded-xl bottom-14 left-2 sm:-left-10 z-10 flex justify-evenly items-center
          gap-2"
          >
            <div className="rounded-full h-8 w-8  bg-primary text-white flex justify-center items-center">
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
          <div className="bg-white/20 backdrop-blur-lg rounded-2xl relative overflow-y-hidden">
            <Image
              src="/image-3.png"
              alt="Hero Image"
              className=" z-0 relative -bottom-10 drop-shadow-2xl w-[450px] h-[520px] sm:h-[550px] object-cover"
            />
          </div>
        </div>
      </div>
      <div className="">
        <p className="text-hero-subtitle text-center pb-5 md:pb-10">Official Partner</p>
        <div className="flex gap-5 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-24 justify-center items-center w-full h-full flex-wrap">
          <Image
            src="/nu.svg"
            alt="Logo NU"
            as={NextImage}
            width={200}
            height={200}
            className="w-24 sm:w-28"
          />
          <Image
            src="/pkb.svg"
            alt="Logo NU"
            as={NextImage}
            width={200}
            height={200}
            className="w-20 sm:w-24"
          />
          <Image
            src="/muslimat.svg"
            alt="Logo NU"
            as={NextImage}
            width={200}
            height={200}
            className="w-32 sm:w-40"
          />
          <Image
            src="/anshor.png"
            alt="Logo NU"
            as={NextImage}
            width={200}
            height={200}
            className="w-[81px] sm:w-24"
          />
          <Image
            src="/fatayat.svg"
            alt="Logo NU"
            as={NextImage}
            width={200}
            height={200}
            className="w-[75px] sm:w-[85px]"
          />
        </div>
      </div>
    </section>
  );
}
