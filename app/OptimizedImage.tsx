import type { ImgHTMLAttributes } from "react";

type OptimizedImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet"> & {
  src: string;
  alt: string;
  widths?: readonly number[];
  quality?: number;
};

const defaultWidths = [480, 768, 1200] as const;

function netlifyImageUrl(src: string, width: number, quality: number) {
  const params = new URLSearchParams({
    url: src,
    w: String(width),
    q: String(quality),
    fm: "webp",
  });

  return `/.netlify/images?${params.toString()}`;
}

/**
 * Keeps the original image as a durable fallback and lets Netlify Image CDN
 * select a smaller WebP for the visitor's viewport in production.
 */
export function OptimizedImage({
  src,
  alt,
  widths = defaultWidths,
  quality = 84,
  sizes = "100vw",
  decoding = "async",
  ...props
}: OptimizedImageProps) {
  const canTransform = process.env.NODE_ENV === "production" && src.startsWith("/") && !src.endsWith(".svg");
  const uniqueWidths = [...new Set(widths)].sort((a, b) => a - b);
  const srcSet = canTransform
    ? uniqueWidths.map((width) => `${netlifyImageUrl(src, width, quality)} ${width}w`).join(", ")
    : undefined;

  // A plain img is intentional: the production loader is Netlify Image CDN.
  // eslint-disable-next-line @next/next/no-img-element
  return <img {...props} src={src} srcSet={srcSet} sizes={srcSet ? sizes : undefined} decoding={decoding} alt={alt} />;
}
