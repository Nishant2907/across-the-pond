"use client";
import React, { useRef, useState, useEffect } from "react";
import Navbar from "@/components/layout/navbar";

export default function BestWishes() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Start playing muted
    video.muted = true;
    video.play().catch((error) => {
      console.log("Autoplay failed:", error);
    });

    // Unmute on keypress (any key)
    const handleKeydown = () => {
      if (video.muted) {
        video.muted = false;
        video.play();
        setIsMuted(false);
        window.removeEventListener('keydown', handleKeydown);
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, []);

  const handleUnmute = () => {
    const video = videoRef.current;
    if (video && isMuted) {
      video.muted = false;
      video.play();
      setIsMuted(false);
    }
  };

  return (
    <main className="flex flex-col w-full min-h-screen bg-[#fffff2]" onClick={handleUnmute}>
      <Navbar className="bg-[#fffff2]" textColor="text-[#090E4A]" useDarkLogo />

      <div className="flex-1 flex items-center justify-center bg-[#fffff2] pt-20">
        <div className="w-full max-w-5xl">
          <div className="mb-3 text-center">
            <p className="text-black text-base md:text-lg font-semibold">
              Wishing you a Merry Christmas & a Prosperous New Year!
            </p>
          </div>

          <div className="relative w-full overflow-hidden">
            <video
              ref={videoRef}
              className="w-full"
              style={{ maxHeight: "85vh", objectFit: "contain" }}
              autoPlay
              muted
              controls
              playsInline
              loop
            >
              <source src="/assets/best-wishes.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {isMuted && (
              <div
                className="absolute top-4 right-4 bg-[#FFE600] hover:bg-[#FFD700] text-black px-6 py-3 rounded-full cursor-pointer shadow-lg transform transition-all hover:scale-105 flex items-center gap-2 font-semibold"
                onClick={handleUnmute}
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                </svg>
                Click to Unmute
              </div>
            )}
          </div>
        </div>
      </div>

    </main>
  );
}
