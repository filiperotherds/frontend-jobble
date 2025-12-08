import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

import infoIcon from "@/assets/info-icon.svg";
import wallet from "@/assets/wallet.svg";
import { Sparkle } from "lucide-react";

export default function Topbar() {
  return (
    <div className="absolute px-2 w-full h-12 top-0 left-0 bg-blue-950">
      <div className="w-full h-10 flex flex-row items-center justify-center md:justify-between">
        <Link href="/docs" target="_blank" className="hidden md:flex">
          <Button variant="link" size="sm" className="text-white">
            <span>Prestador Seguro</span>
            <Image src={infoIcon} alt="info" className="size-4 invert" />
          </Button>
        </Link>

        <div className="flex flex-row items-center justify-center gap-1 text-sm text-white">
          <span>Já disponível a </span>
          <span className="font-medium"> aplicação mobile</span>
          <span> nas lojas de aplicativo!</span>
        </div>

        <Link href="/organization/billing" className="hidden md:flex">
          <Button variant="default" className="h-7">
            <Sparkle />
            Gestão de Assinatura
          </Button>
        </Link>
      </div>
    </div>
  );
}
