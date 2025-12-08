import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

import infoIcon from "@/assets/info-icon.svg";
import wallet from "@/assets/wallet.svg";

export default function TopBar() {
  return (
    <div className="hidden md:flex absolute px-2 w-full h-12 top-0 left-0 bg-blue-950">
      <div className="w-full h-10 flex flex-row items-center justify-between">
        <Link href="/docs">
          <Button variant="link" size="sm" className="text-white">
            <span>Prestador Seguro</span>
            <Image src={infoIcon} alt="info" className="size-4 invert" />
          </Button>
        </Link>

        <div className="flex flex-row items-center justify-center gap-1 text-sm text-white">
          <span>Lançamento da imersão</span>
          <span className="font-medium"> Curso Jobble</span>
          <span> - Julho de 2026</span>
        </div>

        <Link href="/billing">
          <Button variant="default" className="h-7">
            <Image src={wallet} alt="wallet" className="size-3 invert" />
            Gestão de Assinatura
          </Button>
        </Link>
      </div>
    </div>
  );
}
