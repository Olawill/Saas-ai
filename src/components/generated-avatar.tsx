import { useMemo } from "react";
import { cn } from "@/lib/utils";

import { generateAvatarUri } from "@/lib/avatar";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface GeneratedAvatarProps {
  seed: string;
  className?: string;
  variant: "botttsNeutral" | "initials";
}

export const GeneratedAvatar = ({
  seed,
  className,
  variant,
}: GeneratedAvatarProps) => {
  const avatar = useMemo(() => {
    try {
      const uri = generateAvatarUri({ seed, variant });

      if (!uri) return null;

      return uri;
    } catch (error) {
      console.error("Failed to create avatar:", error);
      return null;
    }
  }, [seed, variant]);

  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={avatar ?? undefined} alt="Avatar" />
      <AvatarFallback>{seed.charAt(0).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
};
