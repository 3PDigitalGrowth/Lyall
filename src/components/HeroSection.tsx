"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { heroStages } from "@/lib/site-data";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 192;
const RIGHT_BIAS_SCALE = 1.24;

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const stageRef = useRef(0);
  const [activeStage, setActiveStage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleChange = () => setIsMobile(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const drawFrame = useCallback(
    (frameIndex: number) => {
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");
      const image = imagesRef.current[frameIndex];

      if (!canvas || !context || !image || !image.complete) {
        return;
      }

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const devicePixelRatio = window.devicePixelRatio || 1;

      canvas.width = Math.floor(viewportWidth * devicePixelRatio);
      canvas.height = Math.floor(viewportHeight * devicePixelRatio);

      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      context.clearRect(0, 0, viewportWidth, viewportHeight);

      const canvasAspect = viewportWidth / viewportHeight;
      const imageAspect = image.naturalWidth / image.naturalHeight;

      let drawWidth = viewportWidth;
      let drawHeight = viewportHeight;

      if (canvasAspect > imageAspect) {
        drawWidth = viewportWidth;
        drawHeight = viewportWidth / imageAspect;
      } else {
        drawHeight = viewportHeight;
        drawWidth = viewportHeight * imageAspect;
      }

      const biasScale = isMobile ? RIGHT_BIAS_SCALE + 0.08 : RIGHT_BIAS_SCALE;
      drawWidth *= biasScale;
      drawHeight *= biasScale;

      const offsetX = viewportWidth - drawWidth;
      const offsetY = (viewportHeight - drawHeight) / 2;

      context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
      currentFrameRef.current = frameIndex;
    },
    [isMobile],
  );

  const queueDraw = useCallback(
    (frameIndex: number) => {
      targetFrameRef.current = frameIndex;

      if (animationFrameRef.current !== null) {
        return;
      }

      animationFrameRef.current = window.requestAnimationFrame(() => {
        animationFrameRef.current = null;
        drawFrame(targetFrameRef.current);
      });
    },
    [drawFrame],
  );

  useEffect(() => {
    let mounted = true;
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];
    const handleAssetReady = () => {
      loadedCount += 1;

      if (!mounted) {
        return;
      }

      setLoadProgress(Math.round((loadedCount / FRAME_COUNT) * 100));

      if (loadedCount === FRAME_COUNT) {
        imagesRef.current = images;
        setIsLoaded(true);
      }
    };

    for (let index = 1; index <= FRAME_COUNT; index += 1) {
      const image = new Image();
      image.decoding = "async";

      image.onload = handleAssetReady;
      image.onerror = () => handleAssetReady();
      image.src = `/video/frames/frame_${String(index).padStart(4, "0")}.jpg`;
      images.push(image);
    }

    imagesRef.current = images;

    return () => {
      mounted = false;

      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    queueDraw(currentFrameRef.current);
  }, [isLoaded, queueDraw]);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    const handleResize = () => {
      drawFrame(currentFrameRef.current);
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [drawFrame, isLoaded]);

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;

    if (!section || !pin || !isLoaded) {
      return;
    }

    const context = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${window.innerHeight * (isMobile ? 3 : 4)}`,
        pin,
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const nextFrame = Math.min(
            FRAME_COUNT - 1,
            Math.floor(progress * (FRAME_COUNT - 1)),
          );
          const nextStage = Math.min(
            heroStages.length - 1,
            Math.floor(progress * heroStages.length),
          );

          if (stageRef.current !== nextStage) {
            stageRef.current = nextStage;
            setActiveStage(nextStage);
          }

          if (nextFrame !== targetFrameRef.current) {
            queueDraw(nextFrame);
          }
        },
      });
    }, section);

    return () => {
      context.revert();
    };
  }, [isLoaded, isMobile, queueDraw]);

  const heroHeight = useMemo(() => (isMobile ? "300vh" : "400vh"), [isMobile]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={{ height: heroHeight }}
      className="relative bg-black"
    >
      <div ref={pinRef} className="relative h-screen overflow-hidden bg-black">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.66)_0%,rgba(0,0,0,0.45)_32%,rgba(0,0,0,0.08)_58%,rgba(0,0,0,0)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.5),transparent_22%)]" />

        <div
          className={`absolute inset-0 z-20 flex items-center justify-center bg-black transition-opacity duration-500 ${
            isLoaded ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          <p className="font-display text-5xl font-bold text-white md:text-6xl">
            {loadProgress}%
          </p>
        </div>

        <div className="relative z-10 flex h-full items-center px-[8vw]">
          <div className="max-w-[540px]">
            {heroStages.map((stage, index) => {
              const isActive = activeStage === index;

              return (
                <div
                  key={index}
                  className={`absolute left-[8vw] top-1/2 max-w-[540px] -translate-y-1/2 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                  style={{ willChange: "opacity" }}
                >
                  {"heading" in stage ? (
                    <>
                      <h1 className="font-display text-[32px] font-bold uppercase leading-tight tracking-[0.02em] text-white md:text-[56px]">
                        {stage.heading}
                      </h1>
                      <p className="mt-6 font-body text-base leading-8 text-white/90 md:text-[20px]">
                        {stage.body}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="font-display text-[36px] font-bold uppercase tracking-[0.08em] text-white md:text-[72px]">
                        {stage.name}
                      </p>
                      <p className="mt-5 font-body text-lg text-white md:text-[22px]">
                        {stage.descriptor}
                      </p>
                      <p className="mt-4 font-body text-base leading-8 text-white/90 md:text-[20px]">
                        {stage.subtext}
                      </p>
                      <div className="mt-8 flex flex-col items-start gap-6">
                        <Link
                          href="#contact"
                          className="bg-teal px-6 py-3 font-body text-sm font-medium uppercase tracking-[0.08em] text-white transition-colors hover:bg-navy"
                        >
                          Work with Lyall
                        </Link>
                        <p className="animate-bounce font-body text-sm uppercase tracking-[0.08em] text-white/80">
                          Scroll to learn more ↓
                        </p>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
