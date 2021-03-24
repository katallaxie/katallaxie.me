import React, { useMemo } from 'react'
import clsx from 'clsx'
import { useMenuContext } from '@state/menu'

export const DefaultLayoutSidebar = (): JSX.Element => {
  const { show, items } = useMenuContext()

  const styles = useMemo(
    () =>
      clsx([
        'fixed',
        'bg-black',
        'top-0',
        'left-0',
        'transition-transform',
        'transform-gpu',
        'w-8/12',
        'md:w-6/12',
        'lg:w-6/12',
        'xl:w-3/12',
        'h-screen',
        'opacity-100',
        'overflow-hidden',
        'border-r',
        'border-gray-700',
        'py-12',
        show && 'opacity-0 translate-x-0',
        !show && 'transition -translate-x-full'
      ]),
    [items, show]
  )

  return (
    <div className={styles}>
      <ul>
        {items.map((item, i) => (
          <li key={i} className="border-b border-gray-700 p-6">
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 text-xl md:text-2xl lg:text-3xl font-semibold hover:text-white"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DefaultLayoutSidebar
