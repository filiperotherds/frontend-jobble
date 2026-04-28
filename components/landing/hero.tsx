"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="bg-white text-atl-dark pt-28 pb-10 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        <h1 className="text-[56px] md:text-[64px] font-medium leading-[1.1] tracking-tight text-atl-dark">
          Unleash your
          <br />
          <span className="relative inline-block font-extrabold">
            human+AI
            <div className="absolute -bottom-6 left-0 w-full h-8 pointer-events-none">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 306 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <defs>
                  <mask id="squiggle-mask">
                    <motion.rect
                      x="0"
                      y="0"
                      width="100%"
                      height="100%"
                      fill="white"
                      initial={{ translateX: "-100%" }}
                      animate={{ translateX: "0%" }}
                      transition={{
                        duration: 0.8,
                        ease: [0.45, 0, 0.55, 1],
                        delay: 0.6,
                      }}
                    />
                  </mask>
                </defs>
                <path
                  d="M0.314542 22.3672C52.9464 14.9125 91.8245 33.6666 144.966 18.1254C147.46 24.7349 153.892 33.0058 163.497 33.1094C155.486 32.9725 142.641 15.7178 155.536 27.2686C163.119 36.0683 196.172 25.2364 170.842 32.944C188.334 31.2885 204.356 20.5339 216.163 10.9702C235.811 -2.65832 220.928 23.6737 235.178 36.8756C255.37 55.2242 316.463 7.29572 304.134 7.28816C296.296 13.2947 285.769 17.046 281.423 23.6985C204.757 63.1757 259.992 -9.72674 214.311 2.55426C139.744 53.2533 177.393 7.4163 133.572 10.6223C108.06 28.9946 -0.613806 0.46356 0.29434 22.3672L0.314542 22.3672Z"
                  fill="#FFA900"
                  mask="url(#squiggle-mask)"
                />
              </svg>
            </div>
          </span>{" "}
          superteam
        </h1>

        <p className="text-lg md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Everyone. Working on the right things, including your AI agents.
          <br />
          Jira is where teams and agents come together to plan, execute, and
          deliver outcomes.
        </p>

        <Button className="bg-atl-blue text-white px-8 py-3 rounded-full hover:bg-atl-blue/85 h-auto">
          Get started
        </Button>
      </div>
    </section>
  );
}
