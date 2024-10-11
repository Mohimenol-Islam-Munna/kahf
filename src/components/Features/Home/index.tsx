import { FC } from "react";
import { CommonHeader } from "../../Shared";

type Props = {};

export const Home: FC<Props> = (): JSX.Element => {
  return (
    <div>
      <CommonHeader />
      <h2 className="mb-1">Home page</h2>
    </div>
  );
};
