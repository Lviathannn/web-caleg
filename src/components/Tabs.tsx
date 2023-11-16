"use client";
import { Button } from "@nextui-org/react";
import { Goal, View } from "lucide-react";
import VissionMissionCard from "./VissionMissionCard";
import { useState } from "react";

type Props = {};

export default function Tabs({}: Props) {
  const [activeTabs, setActiveTabs] = useState<"visi" | "misi">("visi");

  return (
    <div className="flex flex-col gap-10 lg:flex-row justify-between items-center w-full">
      <VissionMissionCard activeTabs={activeTabs} />
      <div className="w-full">
        <div className="flex flex-col gap-5">
          <Button
            color={activeTabs === "visi" ? "secondary" : "default"}
            variant={activeTabs === "visi" ? "solid" : "light"}
            size="lg"
            className={`text-start justify-start text-xl py-8 items-center gap-5 w-full`}
            radius="lg"
            startContent={
              <View className={activeTabs === "visi" ? "text-white" : "text-secondary"} />
            }
            onClick={() => setActiveTabs("visi")}
          >
            Visi
          </Button>
          <Button
            color={activeTabs === "misi" ? "secondary" : "default"}
            variant={activeTabs === "misi" ? "solid" : "light"}
            size="lg"
            className={`text-start justify-start text-xl py-8 items-center gap-5`}
            radius="lg"
            startContent={
              <Goal className={activeTabs === "misi" ? "text-white" : "text-secondary"} />
            }
            onClick={() => setActiveTabs("misi")}
          >
            Misi
          </Button>
        </div>
      </div>
    </div>
  );
}
