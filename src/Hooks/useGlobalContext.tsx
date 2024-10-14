import { useState } from "react";
import { GlobalContextStateType, UseGlobalContextType } from "../context";
import { getLocalStorage } from "../utils";

export const useGlobalContext = (): UseGlobalContextType => {
  const linkListData = getLocalStorage("linkList");
  const profileInfoData = getLocalStorage("profileInfo");

  const [globalContextState, setGlobalContextState] =
    useState<GlobalContextStateType>({
      linkList: linkListData || [],
      profileInfo: profileInfoData
        ? { ...profileInfoData, profileImage: null }
        : {
            firstName: "",
            lastName: "",
            email: "",
            profileImage: null,
            profileImageBase64: "",
          },
    });

  const globalContextStateHandler = (key: string, value: any) => {
    setGlobalContextState((prev) => ({ ...prev, [`${key}`]: value }));
  };

  return { globalContextState, globalContextStateHandler };
};
