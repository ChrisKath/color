import HTMLHead from 'next/head'
import moment from 'moment-timezone'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { getConfig } from '@/libs/configs'
import { HeaderComponent, DialogComponent, FooterComponent } from '@/components'
import store from '@/store'
import '@/utils/defineProperty'
import '@style/main.scss'

// SETUP
moment.tz.setDefault('Asia/Bangkok')

export default function Application({ Component, pageProps }: AppProps) {
  // __RENDER
  return (
    <>
      <HTMLHead>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='robots' content='noindex, nofollow' />
        <meta name='theme-color' content='#0070F3' />
        <link rel='manifest' href='manifest.json' />
        <link rel='icon' href='favicon.ico' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Prompt:wght@200;400;600;800&display=swap' />
        <link rel='preconnect' href='https://cdn.jsdelivr.net' />
        <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css' />
        <title>{getConfig('WEB_TITLE')}</title>
      </HTMLHead>

      <div className='ui--app-wrapper'>
        <Provider store={store}>
          <HeaderComponent />
          <DialogComponent />
          <Component {...pageProps} />
          <FooterComponent />
        </Provider>
      </div>
    </>
  )
}
