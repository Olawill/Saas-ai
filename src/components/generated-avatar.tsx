import { createAvatar } from "@dicebear/core";
import { botttsNeutral, initials } from "@dicebear/collection";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useMemo } from "react";

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
      if (variant === "botttsNeutral") {
        return createAvatar(botttsNeutral, {
          seed,
        });
      } else {
        return createAvatar(initials, {
          seed,
          fontWeight: 500,
          fontSize: 42,
        });
      }
    } catch (error) {
      console.error("Failed to create avatar:", error);
      return null;
    }
  }, [seed, variant]);

  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={avatar?.toDataUri()} alt="Avatar" />
      <AvatarFallback>{seed.charAt(0).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
};
