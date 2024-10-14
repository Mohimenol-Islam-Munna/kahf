import { createContext } from "react";

export type LinkListItemType = {
  [key: string]: any;
  id: number;
  title: string;
  linkUrl: string;
  platform: string;
};

export type ProfileStateType = {
  firstName: string;
  lastName: string;
  email: string;
  profileImage: File | null;
  profileImageBase64: string | ArrayBuffer | null;
};

export type LinkListType = Array<LinkListItemType>;

export type GlobalContextStateType = {
  linkList: LinkListType;
  profileInfo: ProfileStateType;
};

export type UseGlobalContextType = {
  globalContextState: GlobalContextStateType;
  globalContextStateHandler: (key: string, value: any) => void;
};

export const GlobalContext = createContext<UseGlobalContextType | null>(null);

export const GlobalContextProvider = GlobalContext.Provider;
