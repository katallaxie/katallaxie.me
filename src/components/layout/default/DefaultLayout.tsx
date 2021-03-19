import React from 'react'
import useLayoutContext from '@hooks/useLayout'
import Content from '@components/layout/default/DefaultLayoutContent'
import Context from '@components/layout/default/DefaultLayoutContext'
import Nav from '@components/layout/default/DefaultLayoutNav'
import { useMenuContext } from '@state/menu'
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
  const { show } = useMenuContext()

  const styles = clsx(
    [
      'fixed',
      'top-0',
      'left-0',
      'transition',
      'transform-gpu',
      'grid',
      'gap-4',
      'grid-cols-12',
      'md:h-screen',
      'md:w-screen',
      'md:overflow-hidden'
    ],
    { 'translate-x-1/4': show },
    [className]
  )

  const sidebar = clsx(
    [
      'fixed',
      'top-0',
      'transition',
      'left-0',
      'transform-gpu',
      'w-3/12',
      'h-screen',
      'opacity-1',
      'overflow-hidden'
    ],
    { 'translate-x-0': show, '-translate-x-full': !show }
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
      <div className={sidebar}>Hello</div>
      <div id="modal-root"></div>
    </>
  )
}

export default DefaultLayout
