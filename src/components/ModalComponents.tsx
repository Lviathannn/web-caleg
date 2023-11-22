'use client';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Image,
} from '@nextui-org/react';
import { Check, Search } from 'lucide-react';

type props = {
  image: string;
  title: string;
  content: string;
};

export default function ModalComponents({ image, title, content }: props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color='secondary' startContent={<Search />}>
        Selengkapnya
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        closeButton={<></>}
        placement='center'
        className='max-w-[90%] md:max-w-lg lg:max-w-xl '
        backdrop='blur'
      >
        <ModalContent>
          {(onClose) => (
            <>
              <Image
                src={`/${image}.jpg`}
                alt='Program 1'
                className=' w-full rounded-[12px]'
              />
              <ModalHeader className='flex flex-col gap-1'>{title}</ModalHeader>
              <ModalBody>
                <p>{content}</p>
              </ModalBody>
              <ModalFooter>
                <Button
                  color='secondary'
                  onPress={onClose}
                  startContent={<Check />}
                >
                  Ok
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
