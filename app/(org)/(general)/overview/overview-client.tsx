"use client";

import { BalanceCard } from "@/components/balance-card";
import { BillingCard } from "@/components/billing-card";
import { SolicitationList } from "@/components/solicitation-list";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";
import { ReplyAll } from "lucide-react";
import Link from "next/link";

export function OverviewClient() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full flex items-center justify-center pb-28">
        <div className="w-full h-full flex flex-col items-start justify-start space-y-8">
          <BillingCard />

          <Separator />

          <BalanceCard />

          <SolicitationList />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-start justify-start">
      <div className="w-full flex flex-row items-start justify-start gap-4">
        <div className="w-3/4 h-56 bg-white rounded-lg"></div>

        <div className="w-1/4 h-56 flex flex-col items-start justify-start p-4 bg-white rounded-lg">
          <div className="w-full flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-center gap-2">
              <div className="size-2 rounded-full bg-orange-500" />

              <span className="text-sm font-semibold text-neutral-700">
                Pedidos de Orçamento
              </span>

              <div className="size-5 flex items-center justify-center rounded-sm bg-neutral-200/80">
                <span className="text-xs text-muted-foreground font-semibold">
                  3
                </span>
              </div>
            </div>

            <Link href="/" className="hover:cursor-pointer">
              <Button
                size={"icon-sm"}
                variant={"ghost"}
                className="hover:bg-transparent size-min cursor-pointer"
              >
                <ReplyAll className="text-neutral-700" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
