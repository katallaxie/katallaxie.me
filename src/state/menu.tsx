import React, { useState } from 'react'
import type { MenuListItem } from '@components/layout/MenuListItem'

export interface Menu {
  items?: Array<MenuListItem>
  show?: boolean
  toggle?: VoidFunction
  open?: VoidFunction
  close?: VoidFunction
}

export const MenuContext = React.createContext<Menu | null>(null)

export const useMenuContext = (): Menu =>
  React.useContext<Menu | null>(MenuContext)

export interface MenuProviderProps {
  children?: React.ReactNode
  items?: Array<MenuListItem>
}

export const MenuProvider = ({
  items,
  children
}: MenuProviderProps): JSX.Element => {
  const [show, setShow] = useState(false)
  const open = () => setShow(true)
  const close = () => setShow(false)
  const toggle = () => setShow(!show)

  return (
    <MenuContext.Provider value={{ items, open, show, close, toggle }}>
      {children}
    </MenuContext.Provider>
  )
}

export const MenuConsumer = MenuContext.Consumer
export default MenuContext
