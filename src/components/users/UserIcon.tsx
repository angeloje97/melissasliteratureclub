import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";

export type UserData = {
  id: string;
  alias: string;
  image: string;
};

const UserIcon = (userData: UserData) => {
  const router = useRouter();
  const handleClickUser = async () => {
    if (!userData.id) return;
    await router.push(`/${userData.id}`);
  };
  return (
    <button
      className="h-16 w-16 overflow-hidden rounded-full border-2"
      onClick={handleClickUser}
    >
      <img src={userData.image} className="h-16 w-16" />
    </button>
  );
};

export default UserIcon;
