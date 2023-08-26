import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  return (
    <>
      <div className="container mx-auto flex flex-row justify-end gap-3 p-2">
        <SignInOutButton />
      </div>
    </>
  );
};

const SignInOutButton = () => {
  const { data: sessionData } = useSession();

  const label = !sessionData ? "Sign In" : "Sign Out";
  const func = !sessionData ? () => void signIn() : () => void signOut();

  return (
    <>
      <button onClick={func}>{label}</button>
    </>
  );
};

export default Navbar;
