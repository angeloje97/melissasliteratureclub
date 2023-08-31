import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const title = "Melissa's Literature Club";
  return (
    <>
      <div className=" container mx-auto flex flex-row items-center justify-between rounded border-2 pl-2">
        <p>Navigation Buttons</p>
        <p className="text-2xl">{title}</p>
        <SignInOutButton />
      </div>
    </>
  );
};

const SignInOutButton = () => {
  const { data: sessionData } = useSession();

  const label = !sessionData ? "Sign In" : "Sign Out";
  const func = !sessionData ? () => void signIn() : () => void signOut();
  const nameTag = sessionData ? <p>{sessionData.user.name}</p> : <></>;

  return (
    <div className="flex flex-row items-center gap-3 justify-self-end">
      {nameTag}
      <button className="border-l-2 p-2" onClick={func}>
        {label}
      </button>
    </div>
  );
};

export default Navbar;
