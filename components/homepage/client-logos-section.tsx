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
  // Duplicate logos 4 times for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <SectionContainer spacing="md" variant="darker" className="border-y border-border/50 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground">
          הם כבר סמכו עלינו
        </h2>

        {/* Infinite Scrolling Carousel */}
        <div className="relative overflow-x-hidden w-full">
          <div className="flex gap-8 md:gap-12 animate-scroll">
            {duplicatedClients.map((client, index) => (
              <div key={`${client}-${index}`} className="flex items-center justify-center shrink-0 w-20 md:w-28">
                <ImagePlaceholder
                  height="h-12 md:h-16"
                  width="w-20 md:w-28"
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
            transform: translateX(calc(-80px * 8 - 32px * 7));
          }
        }

        @media (min-width: 768px) {
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-112px * 8 - 48px * 7));
            }
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </SectionContainer>
  );
}
