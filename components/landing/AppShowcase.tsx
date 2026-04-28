"use client";

import React from "react";
import {
  ChevronDown,
  Plus,
  LayoutGrid,
  Bold,
  Italic,
  List,
  Link as LinkIcon,
  Undo2,
  Redo2,
  Type,
  Baseline,
  Info,
  Pause,
  Calendar,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

export function AppShowcase() {
  return (
    <section className="relative w-full pb-32 pt-0 px-6 flex flex-col items-center overflow-hidden bg-white">
      {/* Background SVG */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1165px] h-[330px] z-0 pointer-events-none opacity-100 flex items-center justify-center">
        <svg
          width="1165"
          height="330"
          viewBox="0 0 1165 330"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="_kqswstnw _u7coidpf _dk5didpf _1bsb1osq _4t3ip2n4 _1gdluuw1"
        >
          <path
            d="M977.378 10.7676L977.217 24.9795L1150.09 15.0615L1164.88 273.931L204.614 329.028L201.528 275.049L0 272.822L3.0791 0L977.378 10.7676Z"
            fill="#1868DB"
          ></path>
        </svg>
      </div>

      {/* Mockup Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-[1024px] bg-[#1D2125] text-[#B6C2CF] rounded-xl shadow-2xl border-2 border-white flex flex-col md:flex-row overflow-hidden"
      >
        {/* Main Left Content */}
        <div className="flex-1 p-6 md:p-8 flex flex-col">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-[#F4F5F7] font-semibold text-2xl tracking-tight mb-4">
              Unify login and signup flows
            </h2>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 bg-[#A1BDD914] hover:bg-[#A1BDD929] px-3 py-1.5 rounded text-sm font-medium transition-colors text-[#DEEBFF]">
                To Do <ChevronDown size={14} />
              </button>
              <button className="flex items-center justify-center bg-[#A1BDD914] hover:bg-[#A1BDD929] w-8 h-8 rounded text-[#DEEBFF] transition-colors">
                <Plus size={16} />
              </button>
              <button className="flex items-center justify-center bg-[#A1BDD914] hover:bg-[#A1BDD929] w-8 h-8 rounded text-[#DEEBFF] transition-colors">
                <LayoutGrid size={16} />
              </button>
            </div>
          </div>

          {/* Description Section */}
          <div className="flex-1">
            <h3 className="font-semibold text-sm mb-2 text-[#F4F5F7]">
              Description
            </h3>
            <div className="border border-[#353C43] rounded-md overflow-hidden bg-[#22272B] flex flex-col shadow-sm">
              {/* Toolbar */}
              <div className="flex flex-wrap items-center gap-1.5 border-b border-[#353C43] p-1.5 px-3 bg-[#282E33]">
                <button className="flex items-center gap-1.5 text-xs font-medium text-[#B6C2CF] hover:bg-[#A1BDD914] px-2 py-1 rounded transition-colors">
                  <Zap size={14} className="text-[#FFC400]" />
                  Improve description
                </button>
                <div className="w-[1px] h-4 bg-[#353C43] mx-1" />
                <button className="p-1 hover:bg-[#A1BDD914] rounded text-[#8C9BAB]">
                  <Type size={14} />
                </button>
                <button className="p-1 hover:bg-[#A1BDD914] rounded text-[#8C9BAB]">
                  <Bold size={14} />
                </button>
                <button className="p-1 hover:bg-[#A1BDD914] rounded text-[#8C9BAB]">
                  <ChevronDown size={14} />
                </button>
                <div className="w-[1px] h-4 bg-[#353C43] mx-1" />
                <button className="p-1 hover:bg-[#A1BDD914] rounded text-[#8C9BAB]">
                  <List size={14} />
                </button>
                <button className="p-1 hover:bg-[#A1BDD914] rounded text-[#8C9BAB]">
                  <ChevronDown size={14} />
                </button>
                <button className="p-1 hover:bg-[#A1BDD914] rounded text-[#8C9BAB]">
                  <Baseline size={14} />
                </button>
                <button className="p-1 hover:bg-[#A1BDD914] rounded text-[#8C9BAB]">
                  <Plus size={14} />
                </button>
                <div className="w-[1px] h-4 bg-[#353C43] mx-1" />
                <button className="p-1 hover:bg-[#A1BDD914] rounded text-[#8C9BAB]">
                  <LinkIcon size={14} />
                </button>
                <button className="p-1 hover:bg-[#A1BDD914] rounded text-[#8C9BAB]">
                  <Undo2 size={14} />
                </button>
                <button className="p-1 hover:bg-[#A1BDD914] rounded text-[#8C9BAB]">
                  <Type size={14} />
                </button>
              </div>

              {/* Editor Content Area with Gradient Border */}
              <div className="relative p-0.5 m-2 mt-4 rounded-md overflow-hidden bg-gradient-to-r from-[#0052CC] via-[#00B8D9] to-[#FF5630]">
                <div className="bg-[#22272B] rounded-[5px] p-4 h-full">
                  {/* PRD Tag */}
                  <div className="inline-flex items-center gap-1.5 bg-[#3F2B96]/20 border border-[#3F2B96]/50 text-[#B388FF] text-xs font-medium px-2 py-0.5 rounded mb-4">
                    <List size={12} />
                    PRD: Unified Login and Signup Flows — Mobile App
                  </div>

                  <h4 className="font-semibold text-sm text-[#F4F5F7] mb-2">
                    User story
                  </h4>
                  <ul className="list-disc ml-5 text-sm space-y-1 mb-8">
                    <li>
                      As a new user, when I want to create an account on{" "}
                      <span className="inline-flex items-center bg-[#F4F5F7] text-[#1D2125] font-semibold text-[10px] px-1 rounded-sm leading-tight uppercase tracking-wider mx-0.5">
                        Rovo
                      </span>{" "}
                      I want a simple, clear signup flow so that I can do it
                      quickly with minimal friction while still being secure.
                      <span className="inline-block w-0.5 h-3.5 bg-[#0052CC] ml-0.5 align-middle animate-pulse" />
                    </li>
                  </ul>

                  {/* Footer inside editor */}
                  <div className="flex flex-col mt-4 pt-3 border-t border-[#353C43] text-xs">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#00B8D9] font-medium flex items-center gap-1.5">
                        <span className="flex space-x-0.5">
                          <span
                            className="w-1 h-1 bg-[#00B8D9] rounded-full animate-bounce"
                            style={{ animationDelay: "0ms" }}
                          ></span>
                          <span
                            className="w-1 h-1 bg-[#00B8D9] rounded-full animate-bounce"
                            style={{ animationDelay: "150ms" }}
                          ></span>
                          <span
                            className="w-1 h-1 bg-[#00B8D9] rounded-full animate-bounce"
                            style={{ animationDelay: "300ms" }}
                          ></span>
                        </span>
                        Generating
                      </span>
                      <button className="border border-[#353C43] hover:bg-[#A1BDD914] px-3 py-1 rounded transition-colors text-[#B6C2CF]">
                        Cancel
                      </button>
                    </div>
                    <div className="flex items-center gap-1 text-[#8C9BAB]">
                      <Info size={12} />
                      <span>Uses AI. Verify results.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Play/Pause floating button */}
            <div className="mt-4">
              <button className="bg-[#282E33] border border-[#353C43] hover:bg-[#353C43] w-8 h-8 rounded-full flex items-center justify-center transition-colors shadow-lg">
                <Pause size={14} className="text-[#F4F5F7] fill-current" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-full md:w-64 border-t md:border-t-0 md:border-l border-[#353C43] p-6 md:p-8 bg-[#1D2125]">
          <h3 className="font-semibold text-sm mb-4 text-[#F4F5F7]">Details</h3>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between items-center group">
              <span className="text-[#8C9BAB]">Assignee:</span>
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#5E6C84] text-white text-xs font-medium cursor-pointer">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-4 h-4 text-[#F4F5F7]"
                >
                  <circle cx="12" cy="8" r="4" fill="currentColor" />
                  <path
                    d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            <div className="flex justify-between items-center group">
              <span className="text-[#8C9BAB]">Reporter:</span>
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-pink-500 to-orange-400 overflow-hidden cursor-pointer">
                {/* Mock Avatar */}
                <img
                  src="https://i.pravatar.cc/100?img=5"
                  alt="Reporter"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>

            <div className="flex justify-between items-center group">
              <span className="text-[#8C9BAB]">Priority:</span>
              <div className="cursor-pointer">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="4"
                    width="12"
                    height="3"
                    rx="1.5"
                    fill="#FFAB00"
                  />
                  <rect
                    x="2"
                    y="9"
                    width="12"
                    height="3"
                    rx="1.5"
                    fill="#FFAB00"
                  />
                </svg>
              </div>
            </div>

            <div className="flex justify-between items-center group">
              <span className="text-[#8C9BAB]">Parent:</span>
              <div className="cursor-pointer">
                <div className="w-5 h-5 rounded flex items-center justify-center bg-[#6554C0]">
                  <Zap size={12} className="text-white fill-current" />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center group">
              <span className="text-[#8C9BAB]">Due date:</span>
              <div className="cursor-pointer text-[#8C9BAB] hover:text-[#B6C2CF] transition-colors">
                <Calendar size={16} />
              </div>
            </div>
          </div>

          <button className="text-[#8C9BAB] hover:text-[#B6C2CF] text-sm mt-6 hover:underline transition-colors w-full text-left">
            Show 9 more fields
          </button>
        </div>
      </motion.div>
    </section>
  );
}
