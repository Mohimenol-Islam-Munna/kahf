import { useContext } from "react";
import { GlobalContext, UseGlobalContextType } from "../context";

export const useGlobalContextState = (): UseGlobalContextType | null => {
  const value = useContext(GlobalContext);

  return value;
};
