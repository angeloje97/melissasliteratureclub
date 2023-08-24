import { signIn, signOut, useSession } from "next-auth/react";

interface NavbarProperties {
  className: string;
}

const Navbar = () => {
  return (
    <>
      <div>
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
