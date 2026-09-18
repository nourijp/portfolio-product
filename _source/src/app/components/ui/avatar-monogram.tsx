import Image from "next/image";

/**
 * Renders a real portrait when `imageSrc` is supplied; otherwise falls back
 * to a tasteful "HN" monogram in the site's own palette. No portrait is
 * generated or invented -- swap in a real photo later by just passing
 * `imageSrc`, nothing else about the layout needs to change.
 */
const AvatarMonogram = ({
  imageSrc,
  size = 64,
  className = "",
}: {
  imageSrc?: string;
  size?: number;
  className?: string;
}) => {
  if (imageSrc) {
    return (
      <Image
        src={imageSrc}
        alt="Hamed Nouri"
        width={size}
        height={size}
        className={`rounded-full border-4 border-white object-cover ${className}`}
      />
    );
  }

  return (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center rounded-full border-4 border-white bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)] ${className}`}
    >
      <span
        style={{ fontSize: size * 0.34 }}
        className="font-semibold text-white tracking-tight"
      >
        HN
      </span>
    </div>
  );
};

export default AvatarMonogram;
