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
import { LayoutProvider } from '@state/layout'
import { MultiversalAppBootstrapProps } from '@type/nextjs/MultiversalAppBootstrapProps'
import { SSGPageProps } from '@type/page/SSGPageProps'
import { SSRPageProps } from '@type/page/SSRPageProps'
import { ApolloProvider } from '@apollo/react-hooks'
import { MdxProvider } from '@state/mdx'
import { init } from '@utils/sentry'

// Tailwind CSS
import 'tailwindcss/tailwind.css'

export type Props =
  | MultiversalAppBootstrapProps<SSGPageProps>
  | MultiversalAppBootstrapProps<SSRPageProps>

const MultiversalAppBootstrap = (props: Props): JSX.Element => {
  const { pageProps, router } = props
  const client = useApollo(pageProps.apolloState)

  const bootstrapProps = {
    ...props,
    router,
    pageProps: { ...pageProps }
  }

  init()

  return (
    <ApolloProvider client={client}>
      <LayoutProvider slug={router.query['slug'] as string}>
        <MdxProvider source={pageProps.mdxSource}>
          <GlobalContextProvider>
            <ThemeProvider
              defaultTheme="dark"
              enableSystem={false}
              themes={['dark']}
            >
              <Head>
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1"
                />
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
        </MdxProvider>
      </LayoutProvider>
    </ApolloProvider>
  )
}

export default MultiversalAppBootstrap
