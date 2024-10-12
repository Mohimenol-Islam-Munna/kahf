import { FC } from "react";

import { Container } from "./Container";
import { useGlobalContext } from "../../../Hooks";
import { GlobalContextProvider } from "../../../context";

type Props = {};

export const MainLayout: FC<Props> = (): JSX.Element => {
  const value = useGlobalContext();

  return (
    <GlobalContextProvider value={value}>
      <Container />
    </GlobalContextProvider>
  );
};
