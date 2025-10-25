import { Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  width?: string;
  height?: string;
  className?: string;
  label?: string;
  aspectRatio?: "square" | "video" | "portrait" | "wide";
}

const aspectRatioClasses = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
};

export function ImagePlaceholder({
  width = "w-full",
  height,
  className,
  label,
  aspectRatio,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "image-placeholder rounded-lg",
        width,
        height,
        aspectRatio && aspectRatioClasses[aspectRatio],
        className
      )}
    >
      <div className="flex flex-col items-center justify-center gap-2 p-4">
        <ImageIcon className="w-8 h-8 opacity-70" />
        {label && (
          <span className="text-xs text-center opacity-90">{label}</span>
        )}
      </div>
    </div>
  );
}
