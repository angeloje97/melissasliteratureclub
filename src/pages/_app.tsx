import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import store from "~/store";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { ThemeState } from "~/store/theme";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
