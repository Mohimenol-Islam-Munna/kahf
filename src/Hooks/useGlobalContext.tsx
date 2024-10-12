import { useState } from "react";
import { GlobalContextStateType, UseGlobalContextType } from "../context";

export const useGlobalContext = (): UseGlobalContextType => {
  const [globalContextState, setGlobalContextState] =
    useState<GlobalContextStateType>({
      linkList: [
        {
          id: 1,
          title: "Github Link",
          linkUrl: "https://github.com/Mohimenol-Islam-Munna",
          platform: "github",
        },
        {
          id: 2,
          title: "Facebook Link",
          linkUrl: "https://www.facebook.com/mohimenol.munna",
          platform: "facebook",
        },
      ],
    });

  const globalContextStateHandler = (key: string, value: any) => {
    setGlobalContextState((prev) => ({ ...prev, [`${key}`]: value }));
  };

  return { globalContextState, globalContextStateHandler };
};
