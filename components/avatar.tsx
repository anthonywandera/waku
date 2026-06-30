import Image from "next/image";

interface AvatarComponentProps extends Omit<
  React.ComponentProps<"img">,
  "width" | "height"
> {
  src: string;
  alt: string;
  size?: number;
}

export default function Avatar({
  src,
  alt,
  size = 50,
  className,
  ...props
}: AvatarComponentProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      {...props}
      className={`aspect-square rounded-full border-3 border-elevated object-center object-cover ${className}`}
    />
  );
}
