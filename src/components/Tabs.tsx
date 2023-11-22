'use client';
import { Button } from '@nextui-org/react';
import { Goal, View } from 'lucide-react';
import VissionMissionCard from './VissionMissionCard';
import { useState } from 'react';

type Props = {};

export default function Tabs({}: Props) {
  const [activeTabs, setActiveTabs] = useState<'visi' | 'misi'>('visi');

  return (
    <div className='flex w-full flex-col items-center justify-between gap-10 lg:flex-row'>
      <VissionMissionCard activeTabs={activeTabs} />
      <div className='w-full lg:w-[60%]'>
        <div className='flex flex-col gap-5'>
          <Button
            color={activeTabs === 'visi' ? 'secondary' : 'default'}
            variant={activeTabs === 'visi' ? 'solid' : 'light'}
            size='lg'
            className={`w-full items-center justify-start gap-5 py-8 text-start text-xl`}
            radius='lg'
            startContent={
              <View
                className={
                  activeTabs === 'visi' ? 'text-white' : 'text-secondary'
                }
              />
            }
            onClick={() => setActiveTabs('visi')}
          >
            Visi
          </Button>
          <Button
            color={activeTabs === 'misi' ? 'secondary' : 'default'}
            variant={activeTabs === 'misi' ? 'solid' : 'light'}
            size='lg'
            className={`items-center justify-start gap-5 py-8 text-start text-xl`}
            radius='lg'
            startContent={
              <Goal
                className={
                  activeTabs === 'misi' ? 'text-white' : 'text-secondary'
                }
              />
            }
            onClick={() => setActiveTabs('misi')}
          >
            Misi
          </Button>
        </div>
      </div>
    </div>
  );
}
