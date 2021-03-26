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
          'md:fixed',
          'top-0',
          'left-0',
          'transition-all',
          'transform-gpu',
          'grid',
          'gap-x-4',
          'grid-cols-12',
          'h-screen',
          'w-screen',
          'md:overflow-hidden',
          show && 'left-2/3 lg:left-1/3'
        ],
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
