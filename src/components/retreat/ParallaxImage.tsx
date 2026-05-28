import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ParallaxImage({
  src,
  alt = "",
  factor = 0.3,
  className = "",
  imgClassName = "",
  scaleFrom = 1.08,
}: {
  src: string;
  alt?: string;
  factor?: number;
  className?: string;
  imgClassName?: string;
  scaleFrom?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`${factor * -60}%`, `${factor * 60}%`]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [scaleFrom, 1]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale }}
        className={`w-full h-full object-cover will-change-transform ${imgClassName}`}
      />
    </div>
  );
}
