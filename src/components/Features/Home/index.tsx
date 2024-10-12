import { FC } from "react";
import { CommonHeader } from "../../Shared";
import { HomeContent } from "./HomeContent";

type Props = {};

export const Home: FC<Props> = (): JSX.Element => {
  return (
    <div>
      <CommonHeader />
      <HomeContent />
    </div>
  );
};
