import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import store from "~/store";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import Navbar from "~/components/navbars/Navbar";
import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <>
          <Navbar />
          <Component {...pageProps} />
        </>
      </Provider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
