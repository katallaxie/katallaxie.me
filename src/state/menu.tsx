import React from 'react'
import type { MenuListItem } from '@components/layout/MenuListItem'

export type Menu = Array<MenuListItem>
export const MenuContext = React.createContext<Menu | null>(null)

export const useMenuContext = (): Menu =>
  React.useContext<Menu | null>(MenuContext)

export interface MenuProviderProps {
  children?: React.ReactNode
  data?: Menu
}

export const MenuProvider = ({
  data,
  children
}: MenuProviderProps): JSX.Element => (
  <MenuContext.Provider value={data}>{children}</MenuContext.Provider>
)

export const MenuConsumer = MenuContext.Consumer
export default MenuContext
