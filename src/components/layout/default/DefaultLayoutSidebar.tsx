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
        'w-2/3',
        'lg:w-1/3',
        !show && 'opacity-0 -left-2/3 lg:-left-1/3',
        show && 'opacity-100 lg:left-0',
        'h-screen',
        'transition-all',
        'transform-gpu',
        'opacity-100',
        'overflow-hidden',
        'border-r',
        'border-gray-700',
        'py-12'
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
