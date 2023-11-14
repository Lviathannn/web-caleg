import Link from "next/link";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className=" border-t-1 px-container py-10 flex flex-col gap-10">
      <div className=" flex flex-col gap-10 justify-evenly md:flex-row">
        <div className="flex flex-col">
          <h2 className="text-primary-text text-xl">Azizah Mukarromah</h2>
          <h3 className="text-primary-text text-medium font-light">
            Calon Anggota DPRD Kabupaten Ciamis
          </h3>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-primary-text text-xl">Links</h2>
          <div className="text-primary-text font-light flex flex-col gap-1">
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Program</Link>
            <Link href="#">Contact</Link>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-primary-text text-xl">Information</h2>
          <div className="text-primary-text font-light flex flex-col gap-1">
            <span>Banjaranyar - Ciamis</span>
            <span>Jawa Barat - Indonesia</span>
            <span>+62-8522-1609-712</span>
            <span>azizahmukarromah@gmail.com</span>
          </div>
        </div>
      </div>
      <p className="text-center border-t-1 pt-10 text-sm">
        © 2023 Azizah Mukarromah. All rights reserved
      </p>
    </footer>
  );
}
