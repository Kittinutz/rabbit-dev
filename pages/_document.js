// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';
import theme from '@/styles/theme';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* PWA Config */}
          <meta name='application-name' content='Rabbitmansion' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content='Rabbitmansion' />
          <meta name='description' content='Best PWA App in the world' />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='msapplication-config' content='/icons/browserconfig.xml' />
          <meta name='msapplication-TileColor' content='#2B5797' />
          <meta name='msapplication-tap-highlight' content='no' />
          <meta name='theme-color' content={theme.palette.primary.main} />

          <link rel='apple-touch-icon' href='/icons/apple-touch-icon.png' />
          <link rel='apple-touch-icon' sizes='152x152' href='/icons/touch-icon-ipad.png' />
          <link rel='apple-touch-icon' sizes='180x180' href='/icons/touch-icon-iphone-retina.png' />
          <link rel='apple-touch-icon' sizes='167x167' href='/icons/touch-icon-ipad-retina.png' />

          <link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />
          <link rel='manifest' href='/manifest.json' />
          <link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#5bbad5' />
          <link rel='shortcut icon' href='/favicon.ico' />

          <meta name='twitter:card' content='summary' />
          <meta name='twitter:url' content='https://yourdomain.com' />
          <meta name='twitter:title' content='PWA App' />
          <meta name='twitter:description' content='Best PWA App in the world' />
          <meta name='twitter:image' content='https://yourdomain.com/icons/android-chrome-192x192.png' />
          <meta name='twitter:creator' content='@Rabbitmansion' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='PWA App' />
          <meta property='og:description' content='Best PWA App in the world' />
          <meta property='og:site_name' content='PWA App' />
          <meta property='og:url' content='https://yourdomain.com' />
          <meta property='og:image' content='https://yourdomain.com/icons/apple-touch-icon.png' />
          {/* PWA Config */}

          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;