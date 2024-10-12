import { FC } from "react";
import { HomeContentHeader } from "./HomeContentHeader";
import { LinkCardContainer } from "./LinkCardContainer";

export const HomeContent: FC = (): JSX.Element => {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-10 gap-4">
        <div className="col-span-4 py-8 px-6 bg-white rounded-md">
          left content
        </div>
        <div className="col-span-6 py-8 px-6 bg-white rounded-md">
          <HomeContentHeader />
          <LinkCardContainer />
        </div>
      </div>
    </div>
  );
};
