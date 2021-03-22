import React, { useMemo } from 'react'
import clsx from 'clsx'
import { useMenuContext } from '@state/menu'

export const DefaultLayoutSidebar = (): JSX.Element => {
  const { show, items } = useMenuContext()

  const styles = useMemo(
    () =>
      clsx(
        [
          'fixed',
          'bg-black',
          'top-0',
          'transition',
          'left-0',
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
          'py-12'
        ],
        { 'translate-x-0': show, 'opacity-0': show, '-translate-x-full': !show }
      ),
    [items, show]
  )

  return (
    <div className={styles}>
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
  )
}

export default DefaultLayoutSidebar
