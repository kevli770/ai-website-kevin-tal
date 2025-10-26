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
    <SectionContainer spacing="md" variant="darker" className="border-y border-border/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
          הם כבר סמכו עלינו
        </h2>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center">
              <ImagePlaceholder
                height="h-20"
                width="w-32"
                label={client}
                className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
