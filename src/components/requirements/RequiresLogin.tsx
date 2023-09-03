import { useSession, signIn } from "next-auth/react";
import type { ScriptProps } from "next/script";
import { ReactNode } from "react";

type RequiresLoginProps = {
  children: ReactNode;
  targetName: string;
  redirect: string;
};

const RequiresLogin = ({
  children,
  targetName = "",
  redirect = "",
}: RequiresLoginProps) => {
  const session = useSession();

  if (!session.data) {
    return (
      <div className="my-2 flex w-full items-center justify-center gap-3 rounded border-2 p-2">
        <p>{targetName && `${targetName} `}Requires Login</p>
        <button
          className="rounded border-2 p-2"
          onClick={() => {
            signIn();
          }}
        >
          Sign In
        </button>
      </div>
    );
  } else return children;
};

export default RequiresLogin;
