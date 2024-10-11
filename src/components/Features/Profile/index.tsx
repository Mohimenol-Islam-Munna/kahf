import { FC } from "react";
import { CommonHeader } from "../../Shared";

type Props = {};

export const Profile: FC<Props> = (): JSX.Element => {
  return (
    <div>
      <CommonHeader />
      <h2 className="mb-1">Profile page</h2>
    </div>
  );
};
