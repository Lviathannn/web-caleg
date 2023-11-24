import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import ModalComponents from './ModalComponent';
import NextImage from 'next/image';

type Props = {
  image: string;
  title: string;
  content: string;
};

export default function CardComponent({ image, title, content }: Props) {
  return (
    <Card className=' rounded-[20px] p-5'>
      <CardBody className='p-0'>
        <Image
          src={`/${image}.jpg`}
          alt='Program 1'
          width={800}
          height={400}
          as={NextImage}
          className='h-full w-full rounded-[12px]'
        />
        <h1 className='mt-3 text-lg font-medium text-slate-600'>{title}</h1>
        <p className='mt-1 line-clamp-2'>{content}</p>
      </CardBody>
      <CardFooter className='mt-4 p-0'>
        <ModalComponents image={image} title={title} content={content} />
      </CardFooter>
    </Card>
  );
}
