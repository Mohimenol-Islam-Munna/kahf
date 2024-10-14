import { FC } from "react";
import { ProfileContentHeader } from "./ProfileContentHeader";
import { ProfileContentBody } from "./ProfileContentBody";
import { ProfileViewer } from "../../Shared";

export const ProfileContent: FC = (): JSX.Element => {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-10 gap-4">
        <div className="col-span-10 md:col-span-4 py-8 bg-white rounded-md self-start">
          <div className="flex justify-center">
            <ProfileViewer />
          </div>
        </div>
        <div className="col-span-10 md:col-span-6 pt-8 pb-4 bg-white rounded-md self-start">
          <ProfileContentHeader />
          <ProfileContentBody />
        </div>
      </div>
    </div>
  );
};
