import React from 'react'
import useLayoutContext from '@hooks/useLayout'
import Content from '@components/layout/default/DefaultLayoutContent'
import Context from '@components/layout/default/DefaultLayoutContext'
import Nav from '@components/layout/default/DefaultLayoutNav'
import { guardFactory } from '@utils/graphql'
import clsx from 'clsx'

interface DefaultLayoutProps {
  children?: React.ReactNode
  className?: string
}

const DefaultLayout = ({
  children,
  className,
  ...props
}: DefaultLayoutProps): JSX.Element => {
  const { page } = useLayoutContext()

  const styles = clsx(
    [
      'grid',
      'gap-4',
      'grid-cols-12',
      'md:h-screen',
      'md:w-screen',
      'md:overflow-hidden'
    ],
    [className]
  )

  const pages = page?.refs.filter(guardFactory('__typename', 'Page'))
  const posts = page?.refs.filter(guardFactory('__typename', 'Post'))
  const links = page?.refs.filter(guardFactory('__typename', 'Link'))
  const menuItem = page?.pageMenu?.menu.filter(
    guardFactory('__typename', 'Link')
  )

  return (
    <>
      <div className={styles} {...props}>
        <Context>
          <Nav>Say Hi.</Nav>
        </Context>
        <Content>{children}</Content>
      </div>
      <div id="modal-root"></div>
    </>
  )
}

export default DefaultLayout
