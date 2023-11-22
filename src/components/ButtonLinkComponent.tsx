'use client';

import { Button } from '@nextui-org/react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-scroll';

type Props = {
  caption: string;
  to: string;
  Icon?: LucideIcon;
  offset: number;
};

export default function ButtonLinkComponent({
  caption,
  to,
  Icon,
  offset,
}: Props) {
  return (
    <Button
      className='mt-5 bg-secondary text-white'
      radius='sm'
      startContent={Icon && <Icon size={20} />}
      size='lg'
      as={Link}
      to={to}
      smooth={true}
      offset={offset}
      duration={1000}
    >
      {caption}
    </Button>
  );
}
