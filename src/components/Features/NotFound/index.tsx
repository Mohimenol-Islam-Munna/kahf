import { FC } from "react";

export const NotFound: FC = (): JSX.Element => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-[#272838] text-white">
      <h2 className="py-4 px-8 border border-[#05D397] bg-[#2E2F40] rounded-full">
        Page Not Found
      </h2>
    </div>
  );
};
