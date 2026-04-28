"use client";

import { Hero } from "@/components/landing/Hero";
import { AppShowcase } from "@/components/landing/AppShowcase";
import { FeatureSection } from "@/components/landing/FeatureSection";
import { ProductTabs } from "@/components/landing/ProductTabs";
import { SocialProof } from "@/components/landing/SocialProof";
import { Highlighter } from "@/components/ui/highlighter";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function PublicPage() {
  return (
    <div className="font-sans w-full h-full flex flex-col items-center justify-start bg-white">
      {/* Hero Section */}
      <div className="w-full">
        <Hero />
      </div>

      {/* App Showcase Section */}
      <div className="w-full">
        <AppShowcase />
      </div>

      {/* Feature Section */}
      <div className="w-full">
        <FeatureSection />
      </div>

      {/* Product Tabs Section */}
      <div className="w-full">
        <ProductTabs />
      </div>

      {/* Social Proof Section */}
      <div className="w-full">
        <SocialProof />
      </div>

      {/* Additional Content Section (Consolidated) */}
      <div className="w-full max-w-7xl mx-auto px-6 py-20 space-y-24">
        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="h-60 rounded-2xl bg-gray-50 shadow-sm hover:shadow-md transition-all border border-gray-100 flex items-center justify-center">
            <span className="text-gray-400 font-medium">
              Projeto Organizado
            </span>
          </div>
          <div className="h-60 rounded-2xl bg-gray-50 shadow-sm hover:shadow-md transition-all border border-gray-100 flex items-center justify-center">
            <span className="text-gray-400 font-medium">
              Métricas em Tempo Real
            </span>
          </div>
          <div className="h-60 rounded-2xl bg-gray-50 shadow-sm hover:shadow-md transition-all border border-gray-100 flex items-center justify-center">
            <span className="text-gray-400 font-medium">
              Personalização Total
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="flex-1 space-y-6">
            <Highlighter color="blue" isView>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
                Controle Total
              </span>
            </Highlighter>

            <h2 className="text-4xl md:text-5xl font-bold text-atl-dark leading-tight">
              Gerencie seus projetos com facilidade
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Nossa plataforma oferece todas as ferramentas necessárias para
              você gerenciar seus projetos de forma eficiente e profissional.
            </p>

            <Button className="rounded-full px-10 py-7 text-lg bg-atl-blue hover:bg-blue-700 transition-all h-auto">
              Começar Agora <ChevronRight className="ml-2" />
            </Button>
          </div>

          <div className="flex-1 w-full flex items-center justify-center">
            <div className="relative w-full max-w-lg aspect-square bg-blue-50 rounded-full flex items-center justify-center">
              <div className="text-atl-blue/20">
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
              </div>

              <div className="absolute -top-4 -right-4 w-40 h-40 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 flex items-center justify-center text-center">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">
                  Contrato Digital
                </span>
              </div>

              <div className="absolute bottom-10 -left-10 w-36 h-36 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 flex items-center justify-center text-center">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">
                  Cronograma Automático
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublicPage;
