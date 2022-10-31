import { React } from "react";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

import { store } from "../store";
import { Provider } from "react-redux";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
}
