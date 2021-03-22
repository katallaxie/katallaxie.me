import React, { useMemo } from 'react'
import Content from '@components/layout/default/DefaultLayoutContent'
import Context from '@components/layout/default/DefaultLayoutContext'
import Nav from '@components/layout/default/DefaultLayoutNav'
import Sidebar from '@components/layout/default/DefaultLayoutSidebar'
import { useMenuContext } from '@state/menu'
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
  const { show } = useMenuContext()

  const styles = useMemo(
    () =>
      clsx(
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
        { 'md:translate-x-2/4 lg:translate-x-2/4 xl:translate-x-1/4': show },
        [className]
      ),
    [show]
  )

  return (
    <>
      <div className={styles} {...props}>
        <Context>
          <Nav>Say Hi.</Nav>
        </Context>
        <Content>{children}</Content>
      </div>
      <Sidebar />
      <div id="modal-root"></div>
    </>
  )
}

export default DefaultLayout
