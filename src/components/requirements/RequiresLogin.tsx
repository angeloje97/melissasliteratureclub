import { useSession, signIn } from "next-auth/react";
import type { ScriptProps } from "next/script";
import { ReactNode } from "react";

type RequiresLoginProps = {
  children: ReactNode;
  prefix: string;
  redirect: string;
};

const RequiresLogin = ({
  children,
  prefix = "",
  redirect = "",
}: RequiresLoginProps) => {
  const session = useSession();

  const handleSignIn = () =>
    void signIn(undefined, {
      callbackUrl: redirect,
    });

  if (!session.data) {
    return (
      <div className="my-2 flex w-full items-center justify-center gap-3 rounded border-2 p-2">
        <p>{prefix} Requires Login</p>
        <button className="rounded border-2 p-2" onClick={handleSignIn}>
          Sign In
        </button>
      </div>
    );
  } else return children;
};

export default RequiresLogin;
