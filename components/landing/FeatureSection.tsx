"use client";

import Link from "next/link";
import { Zap, ChevronRight, ArrowRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export function FeatureSection() {
  return (
    <section className="w-full py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-0">
          {/* Left Content */}
          <div className="space-y-4 lg:pr-12">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-atl-light-yellow rounded-sm flex items-center justify-center">
                <Globe size={14} className="text-atl-dark" />
              </div>
              <span className="text-xl font-medium text-atl-dark tracking-tight">
                Professional Website
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-atl-dark tracking-tight leading-[1.1]">
              Sky-Rocket your business
            </h2>
            <p className="text-base text-gray-600 leading-snug max-w-lg">
              Our amazing contractor websites give you access to unique
              marketing resources to minimize your time while being more
              productive.
            </p>
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Button className="bg-atl-blue text-white px-8 py-3 rounded-full hover:bg-atl-blue/85 h-auto">
                Get started
              </Button>
              <Link
                href="#"
                className="group flex items-center gap-1 text-atl-blue hover:text-atl-blue/85 font-medium transition-all"
              >
                Explore Our Websites
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-all duration-300"
                />
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative w-full aspect-video flex items-center justify-center">
            {/* Background Shape */}
            <div
              className="absolute inset-0 z-0 scale-110"
              style={{
                clipPath:
                  "polygon(0% 41%, 8% 41%, 10% 21%, 65% 13%, 67% 3%, 100% 0%, 98% 27%, 100% 27%, 100% 100%, 0% 98%)",
                backgroundColor: "rgb(252, 167, 0)",
              }}
            />

            {/* Mockup Window / Screenshot Container */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 w-full aspect-video bg-gray-50 rounded-lg border-4 border-accent overflow-hidden flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
              <div className="relative z-20 flex flex-col items-center gap-4 text-gray-400">
                <span className="text-sm font-medium">
                  System Screenshot Placeholder
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
