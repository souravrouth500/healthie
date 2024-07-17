import MuiThemeProvider from "@/mui-theme/MuiThemeProvider";
// import "@/styles/globals.css";
import CssBaseline from "@mui/material/CssBaseline";
import type { AppContext, AppProps } from "next/app";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "next/app";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/redux-toolkit/store/store";
import { Provider } from "react-redux";



export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: 0
    }
  }
});

export default function CustomApp({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <MuiThemeProvider>
            {/* <CssBaseline /> */}
            <Toaster richColors position="bottom-left" />
            <Component {...pageProps} />
          </MuiThemeProvider>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  )
}

/* Getting the current user from the server and passing it to the client. */
CustomApp.getInitialProps = async (context: AppContext) => {
  // // const client = initializeApollo({ headers: context.ctx.req?.headers });

  // // resetServerContext();
  const appProps = await App.getInitialProps(context);
  // return { user: data?.authenticatedItem, ...appProps };

  return { ...appProps };
}