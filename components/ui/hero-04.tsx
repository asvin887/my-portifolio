/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ArrowDownRight } from "@aliimam/icons";
import { Button } from "@/components/ui/button";

const workImage = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&auto=format&fit=crop&q=80";

export function HeroSection04() {
  return (
    <section className="relative min-h-screen overflow-hidden py-24 md:py-28">
      <div className="relative z-20 mx-auto max-w-7xl px-6">
        <div className="relative">
          <p className="absolute -top-4 left-4 text-sm font-medium tracking-wider md:left-20">2,006</p>
          <h1 className="relative z-20 text-center text-6xl font-bold tracking-[-6px] text-primary sm:text-7xl md:text-9xl md:tracking-[-14px] xl:text-[10rem] xl:tracking-[-1rem]">
            CREATIVE LEADER
          </h1>
          <p className="absolute -bottom-12 right-24 hidden text-4xl font-thin tracking-[6px] xl:block">ASVIN THAKUR</p>
          <p className="absolute -bottom-12 left-4 text-3xl font-thin tracking-[6px] sm:left-24 sm:text-4xl xl:hidden">ASVIN THAKUR</p>
        </div>

        <div className="relative grid">
          <div className="flex justify-center gap-6 space-y-8 pt-20">
            <div className="flex h-fit w-full max-w-xl items-end gap-6 bg-secondary p-8 text-xl font-bold md:p-10 md:text-2xl lg:text-3xl">
              <div className="text-lg font-semibold leading-tight md:text-xl">
                <div>/ BUSINESS STRATEGY</div>
                <div>/ WEB DESIGN (UX/UI)</div>
                <div>/ AI & TECHNOLOGY</div>
              </div>
              <div className="absolute left-1/2 -top-10 hidden w-fit overflow-hidden bg-secondary md:flex">
                <img src="/profile.png" alt="Asvin Thakur portrait" className="h-[25rem] w-full object-contain grayscale" />
                <div className="rotate-180 p-2 text-left text-xs font-medium tracking-widest [writing-mode:vertical-rl]">BASED IN NAVI MUMBAI</div>
              </div>
            </div>
          </div>
          <div className="flex w-full overflow-hidden bg-secondary md:hidden">
            <img src="/profile.png" alt="Asvin Thakur portrait" className="h-[25rem] w-full object-contain grayscale" />
            <div className="rotate-180 p-2 text-left text-xs font-medium tracking-widest [writing-mode:vertical-rl]">BASED IN NAVI MUMBAI</div>
          </div>
        </div>

        <div className="mt-10 md:mt-40">
          <p className="mx-auto max-w-2xl text-center font-mono text-sm font-medium tracking-wide md:text-base">
            I&apos;M ASVIN THAKUR, A 2006-BORN CREATIVE MIND,
            <br />
            BUILDING MEMORABLE DIGITAL EXPERIENCES WITH
            <br />
            BUSINESS, TECHNOLOGY, AND PEOPLE-FIRST THINKING
          </p>
        </div>
        <div className="flex justify-center pt-6">
          <Button size="lg" asChild>
            <a href="/contact">Book a call</a>
          </Button>
        </div>

        <div className="mt-20 items-end justify-between gap-10 md:flex">
          <div className="relative mb-16 md:mb-0">
            <div className="mb-8 h-36 w-60 overflow-hidden rounded-md border bg-background shadow-lg md:mb-0">
              <img src={workImage} alt="Portfolio preview" className="h-full w-full object-cover grayscale" />
            </div>
            <div className="absolute -top-6 left-6 mb-8 h-36 w-60 overflow-hidden rounded-md border bg-background shadow-lg md:mb-0">
              <img src={workImage} alt="Portfolio preview" className="h-full w-full object-cover grayscale" />
            </div>
            <div className="absolute -top-12 left-12 mb-8 h-36 w-60 overflow-hidden rounded-md border bg-background shadow-lg md:mb-0">
              <img src={workImage} alt="Portfolio preview" className="h-full w-full object-cover grayscale" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 md:justify-end">
              <span className="text-lg font-medium tracking-wider">RECENT WORK</span>
              <ArrowDownRight className="size-6" />
            </div>

            <div className="mt-3 md:text-right">
              <h2 className="text-5xl uppercase tracking-[-4px]">Direction without Limits</h2>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-0 z-0 block dark:hidden"
        style={{
          backgroundImage: `
        linear-gradient(to right, #e5e5e5 1px, transparent 1px),
        linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)
      `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
          WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

      <div
        className="absolute inset-0 z-0 hidden dark:block"
        style={{
          backgroundImage: `
        linear-gradient(to right, #404040 1px, transparent 1px),
        linear-gradient(to bottom, #404040 1px, transparent 1px)
      `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
          WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
    </section>
  );
}
