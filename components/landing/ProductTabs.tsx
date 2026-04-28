"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: "jira",
    name: "Jira",
    tagline: "Dream it, plan it, launch it",
    description: "AI-powered project management to plan, track, and deliver your biggest ideas together.",
    color: "#0052CC",
    quote: "Lumen used Jira to reduce cycle time and increase throughput by 200%.",
    customer: "Lumen",
  },
  {
    id: "confluence",
    name: "Confluence",
    tagline: "Create and organize with AI",
    description: "Build and connect plans, documents and ideas with context-aware AI.",
    color: "#0052CC",
    quote: "Dropbox uses Confluence Cloud to create a more open, collaborative way of working.",
    customer: "Dropbox",
  },
  {
    id: "loom",
    name: "Loom",
    tagline: "Record, share, collaborate",
    description: "Easily record and share AI-powered video messages to reach a broader audience for better async collaboration.",
    color: "#5E35B1",
    quote: "\"Loom has been the light of my life since you showed me it.\"",
    customer: "Alexis Ohanian",
  }
];

export function ProductTabs() {
  const [activeTab, setActiveTab] = useState(products[0].id);

  const activeProduct = products.find(p => p.id === activeTab)!;

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        <h2 className="text-4xl font-bold text-atl-dark text-center">
          Teamwork solutions for high-performing teams
        </h2>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-8 border-b border-gray-100 pb-4">
          {products.map((product) => (
            <Button
              key={product.id}
              variant="ghost"
              onClick={() => setActiveTab(product.id)}
              className={`pb-4 px-2 text-lg font-bold transition-all relative rounded-none hover:bg-transparent h-auto ${
                activeTab === product.id ? "text-atl-dark" : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {product.name}
              {activeTab === product.id && (
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-full" 
                  style={{ backgroundColor: product.color }}
                />
              )}
            </Button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 animate-in fade-in slide-in-from-bottom-4 duration-500" key={activeTab}>
          <div className="flex-1 space-y-8">
            <h3 className="text-4xl font-bold text-atl-dark">{activeProduct.tagline}</h3>
            <p className="text-xl text-atl-dark/70 leading-relaxed">
              {activeProduct.description}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 pt-4">
               <Button className="bg-atl-blue text-white px-8 py-3 rounded-md font-bold hover:bg-blue-700 transition-colors h-auto">
                  Get it free
               </Button>
               <Button variant="link" asChild className="text-atl-blue font-bold flex items-center gap-2 hover:no-underline p-0 h-auto">
                  <Link href={`/software/${activeProduct.id}`}>
                     Explore {activeProduct.name} <ArrowRight size={18} />
                  </Link>
               </Button>
            </div>

            <div className="pt-10 border-t border-gray-100 space-y-4">
               <p className="text-lg italic text-atl-dark/80">"{activeProduct.quote}"</p>
               <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full" />
                  <span className="font-bold text-sm uppercase tracking-wider">{activeProduct.customer}</span>
               </div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="bg-gray-50 rounded-2xl aspect-[4/3] w-full border border-gray-200 shadow-sm flex items-center justify-center p-8">
               <div className="w-full h-full bg-white rounded-xl shadow-2xl border border-gray-100 flex flex-col">
                  <div className="h-8 border-b border-gray-100 flex items-center px-4 gap-2">
                     <div className="w-2 h-2 rounded-full bg-red-400" />
                     <div className="w-2 h-2 rounded-full bg-yellow-400" />
                     <div className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 p-6 space-y-4">
                     <div className="h-4 w-1/4 bg-gray-100 rounded-full" />
                     <div className="h-24 w-full bg-gray-50 rounded-lg border border-gray-100" />
                     <div className="h-24 w-full bg-gray-50 rounded-lg border border-gray-100" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
