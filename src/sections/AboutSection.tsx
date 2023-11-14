import { Button, Image } from "@nextui-org/react";
import { ClipboardEdit } from "lucide-react";

type Props = {};

export default function AboutSection({}: Props) {
  return (
    <section className="px-container py-20">
      <div className="flex flex-col lg:flex-row justify-center items-stretch lg:items-center gap-14 lg:justify-between">
        <div className="lg:max-w-xl xl:max-w-2xl">
          <h1 className="text-hero-title text-primary-text">Siapa Itu Azizah Mukarromah?</h1>
          <p className="mt-5 text-medium text-primary-text">
            Azizah Mukarromah adalah seorang aktifis yang mencuat dalam dunia kegiatan keagamaan dan
            kewanitaan, terlibat dengan berbagai organisasi. Dedikasinya tidak hanya terbatas pada
            keikutsertaannya, tetapi juga pada peran kunci dalam memperkuat nilai-nilai keagamaan
            dan mengadvokasi hak-hak perempuan, menjadikannya sosok inspiratif di kancah perubahan
            sosial.
          </p>
          <Button
            className="bg-secondary text-white mt-5"
            radius="sm"
            startContent={<ClipboardEdit />}
            size="lg"
          >
            Daftar Sebagai Relawan
          </Button>
        </div>
        <div className="relative">
          <div className="bg-gradient-to-b from-bg_start to-bg_end rounded-2xl flex justify-center items-center">
            <Image
              src="/image-1.png"
              alt="Azizah Mukarromah"
              className="w-[450px] h-[520px] sm:h-[550px] object-cover z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
