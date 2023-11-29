import '@/styles/globals.css'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import type { AppProps, AppType } from 'next/app'

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
  
      <Component {...pageProps} />
    </SessionProvider>
  );
};
export default MyApp;

