"use client";

import { SectionContainer } from "@/components/shared/section-container";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";

const clients = [
  "Ormat Technologies",
  "Kornit Digital",
  "IDE Technologies",
  "Kineret Innovation Center",
  "Client Logo 5",
  "Client Logo 6",
  "Client Logo 7",
  "Client Logo 8",
];

export function ClientLogosSection() {
  return (
    <SectionContainer spacing="md" variant="darker" className="border-y border-border/50 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground">
          הם כבר סמכו עלינו
        </h2>

        {/* Infinite Scrolling Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex gap-12 w-max animate-scroll">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center shrink-0">
                <ImagePlaceholder
                  height="h-16"
                  width="w-28"
                  label={client}
                  className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div key={`duplicate-${index}`} className="flex items-center justify-center shrink-0">
                <ImagePlaceholder
                  height="h-16"
                  width="w-28"
                  label={client}
                  className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </SectionContainer>
  );
}
