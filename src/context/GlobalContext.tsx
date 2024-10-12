import { createContext } from "react";

export type LinkListItemType = {
  [key: string]: any;
  id: number;
  title: string;
  linkUrl: string;
  platform: string;
};

export type LinkListType = Array<LinkListItemType>;

export type GlobalContextStateType = {
  linkList: LinkListType;
};

export type UseGlobalContextType = {
  globalContextState: GlobalContextStateType;
  globalContextStateHandler: (key: string, value: any) => void;
};

export const GlobalContext = createContext<UseGlobalContextType | null>(null);

export const GlobalContextProvider = GlobalContext.Provider;
