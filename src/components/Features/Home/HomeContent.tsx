import { FC } from "react";
import { HomeContentHeader } from "./HomeContentHeader";
import { LinkCardContainer } from "./LinkCardContainer";
import { ProfileViewer } from "../../Shared";

export const HomeContent: FC = (): JSX.Element => {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-10 gap-4">
        <div className="col-span-10 md:col-span-4 py-8 bg-white rounded-md self-start">
          <div className="flex justify-center">
            <ProfileViewer />
          </div>
        </div>
        <div className="col-span-10 md:col-span-6 pt-8 pb-4 bg-white rounded-md self-start">
          <HomeContentHeader />
          <LinkCardContainer />
        </div>
      </div>
    </div>
  );
};
