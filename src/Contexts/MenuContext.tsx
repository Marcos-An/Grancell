import { createContext, useState, ReactNode } from "react";

type MenuContextData = {
  activeItem: string,
  changeActiveItem: (activeItem: string) => void,
};

export const MenuContext = createContext({} as MenuContextData);


type MenuContextProviderProps = {
  children: ReactNode,
}

export function MenuContextProvider({ children }: MenuContextProviderProps) {
  const [activeItem, setActiveItem] = useState("Inicio");

  function changeActiveItem(activeItem) {
    setActiveItem(activeItem);
  }


  return (
    <MenuContext.Provider value={{ activeItem, changeActiveItem }}>
      {children}
    </MenuContext.Provider>
  );
}
