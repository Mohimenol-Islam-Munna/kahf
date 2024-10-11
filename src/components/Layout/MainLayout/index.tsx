import { FC } from "react";
import { Container } from "./Container";

type Props = {};

export const MainLayout: FC<Props> = (): JSX.Element => {
  return (
    <div>
      <Container />
    </div>
  );
};
