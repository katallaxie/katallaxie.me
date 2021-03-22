import React from 'react'
import { MenuProvider } from '@state/menu'
import usePageContext from '@hooks/usePage'
import Content from './PageLayoutContent'
import DefaultLayout from '@components/layout/default/DefaultLayout'

interface PageLayoutProps {
  children?: React.ReactNode
}

const PageLayout = ({ children }: PageLayoutProps): JSX.Element => {
  const { menu } = usePageContext()

  return (
    <>
      <MenuProvider items={menu.menu}>
        <DefaultLayout>
          <Content>{children}</Content>
        </DefaultLayout>
      </MenuProvider>
    </>
  )
}

export default PageLayout
