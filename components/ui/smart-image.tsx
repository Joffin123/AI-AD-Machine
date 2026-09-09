import Image, { type ImageProps } from "next/image";

/**
 * next/image blocks SVG sources unless they're marked unoptimized. The
 * placeholder art shipped in /public is SVG, so this wrapper opts those out
 * automatically — swap in a real .jpg/.png and optimization kicks back in with
 * no code change.
 */
export function SmartImage({ src, alt, ...props }: ImageProps) {
  const isSvg = typeof src === "string" && src.toLowerCase().endsWith(".svg");
  return <Image src={src} alt={alt} unoptimized={isSvg} {...props} />;
}
