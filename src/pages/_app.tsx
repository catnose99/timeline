// import { SiteFooter } from '@src/components/SiteFooter';
// import { SiteHeader } from '@src/components/SiteHeader';
import { AppProps } from 'next/app';
import Head from 'next/head';
import siteConfig from '../../site.config';
import '../styles/global.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="icon shortcut"
          type="image/png"
          href={`${siteConfig.siteRoot}/logo.png`}
        />
      </Head>
      {/* <SiteHeader /> */}
      <Component {...pageProps} />
      {/* <SiteFooter /> */}
    </>
  );
}
