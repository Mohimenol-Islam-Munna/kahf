import { FC } from "react";

export const ProfileContentHeader: FC = (): JSX.Element => {
  return (
    <div className="px-6">
      <h2 className="font-bold text-3xl">Profile Details</h2>
      <p className="font-normal text-sm mt-2">
        Add your details to create a personal touch to your profile
      </p>
    </div>
  );
};
