import { FC } from "react";
import { CommonHeader } from "../../Shared";
import { ProfileContent } from "./ProfileContent";

type Props = {};

export const Profile: FC<Props> = (): JSX.Element => {
  return (
    <div>
      <CommonHeader />
      <ProfileContent />
    </div>
  );
};
