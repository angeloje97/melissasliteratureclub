import NextAuth from "next-auth";
// import { authOptions } from "~/server/auth";
import DiscordProvider from "next-auth/providers/discord";

const id = (process.env.DISCORD_CLIENT_ID as string) || null;
const secret = (process.env.DISCORD_CLIENT_SECRET as string) || null;

export const authOptions = {
  providers: [
    DiscordProvider({
      clientId: id!,
      clientSecret: secret!,
    }),
  ],
};

export default NextAuth(authOptions);
