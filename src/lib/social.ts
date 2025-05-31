import { authClient } from "./auth-client";

interface onSocialProps {
  provider: "github" | "google";
  setError: (error: string | null) => void;
  setPending: (pending: boolean) => void;
}

export const onSocial = ({ provider, setError, setPending }: onSocialProps) => {
  setError(null);
  setPending(true);

  authClient.signIn.social(
    {
      provider,
      callbackURL: "/",
    },
    {
      onSuccess: () => {
        setPending(false);
      },
      onError: ({ error }) => {
        setError(error.message);
        setPending(false);
      },
    }
  );
};
