"use client";

import { LoaderIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export const HomeView = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  if (!session) {
    return (
      <div className="flex flex-col gap-2 items-center justify-center h-screen">
        <LoaderIcon className="animate-spin" />
        <span className="text-muted-foreground text-sm font-semibold">
          Loading...
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col p-4 gap-y-4">
      <p>Logged in as {session.user.name}</p>
      <Button
        onClick={() =>
          authClient.signOut({
            fetchOptions: {
              onSuccess: () => router.push("/sign-in"),
            },
          })
        }
      >
        Logout
      </Button>
    </div>
  );
};
