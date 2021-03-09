// import { SiteFooter } from '@src/components/SiteFooter';
// import { SiteHeader } from '@src/components/SiteHeader';
import { AppProps } from 'next/app';
import Head from 'next/head';
import siteConfig from '../../site.config';
import { SiteFooter } from '../components/SiteFooter';
import '../styles/global/index.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="icon shortcut"
          type="image/png"
          href={`${siteConfig.siteRoot}/icon.png`}
        />
        <meta property="og:image" content={`${siteConfig.siteRoot}/icon.png`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Component {...pageProps} />
      <SiteFooter />
    </>
  );
}
