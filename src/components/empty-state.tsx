import Image from "next/image";

interface Props {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

export const EmptyState = ({
  title,
  description,
  image = "/empty.svg",
  imageAlt,
}: Props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={image}
        alt={imageAlt ?? "Empty"}
        width={240}
        height={240}
        className="w-[240px] h-[240px]"
      />
      <div className="flex flex-col gap-y-6 max-w-md mx-auto text-center">
        <h6 className="text-lg font-medium">{title}</h6>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
