import React from 'react'
import Head from 'next/head'
import { useApollo } from '@utils/apollo'
import { isBrowser } from '@utils/utils'
import { GlobalContextProvider } from '@state/state'
import BrowserPageBootstrap, {
  BrowserPageBootstrapProps
} from '@components/bootstrap/BrowserPageBootstrap'
import ServerPageBootstrap, {
  ServerPageBootstrapProps
} from '@components/bootstrap/ServerPageBootstrap'
import { ThemeProvider } from 'next-themes'
import { MultiversalAppBootstrapProps } from '@type/nextjs/MultiversalAppBootstrapProps'
import { SSGPageProps } from '@type/page/SSGPageProps'
import { SSRPageProps } from '@type/page/SSRPageProps'
import { init } from '@utils/sentry'

export type Props =
  | MultiversalAppBootstrapProps<SSGPageProps>
  | MultiversalAppBootstrapProps<SSRPageProps>

const MultiversalAppBootstrap = (props: Props): JSX.Element => {
  const { pageProps, router } = props

  const bootstrapProps = {
    ...props,
    router,
    pageProps: { ...pageProps }
  }

  init()

  return (
    <GlobalContextProvider>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        {isBrowser() ? (
          <BrowserPageBootstrap
            {...(bootstrapProps as BrowserPageBootstrapProps)}
          />
        ) : (
          <ServerPageBootstrap
            {...(bootstrapProps as ServerPageBootstrapProps)}
          />
        )}
      </ThemeProvider>
    </GlobalContextProvider>
  )
}

export default MultiversalAppBootstrap
