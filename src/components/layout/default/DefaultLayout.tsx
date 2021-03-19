import React from 'react'
import Content from '@components/layout/default/DefaultLayoutContent'
import Context from '@components/layout/default/DefaultLayoutContext'
import Nav from '@components/layout/default/DefaultLayoutNav'
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
  const { show, items } = useMenuContext()

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
      'opacity-100',
      'overflow-hidden',
      'border-r',
      'border-gray-700',
      'py-12'
    ],
    { 'translate-x-0': show, 'opacity-0': show, '-translate-x-full': !show }
  )

  return (
    <>
      <div className={styles} {...props}>
        <Context>
          <Nav>Say Hi.</Nav>
        </Context>
        <Content>{children}</Content>
      </div>
      <div className={sidebar}>
        <ul>
          {items.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="text-gray-500 text-4xl font-semibold hover:text-white"
            >
              <li className="border-b border-gray-700 p-6">{item.title}</li>
            </a>
          ))}
        </ul>
      </div>
      <div id="modal-root"></div>
    </>
  )
}

export default DefaultLayout
