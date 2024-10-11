import { FC } from "react";
import { Outlet } from "react-router-dom";

type Props = {};

export const Container: FC<Props> = (): JSX.Element => {
  return (
    <div className="w-full max-w-screen-lg mx-auto bg-[#FAFAFA] p-4">
      <Outlet />
    </div>
  );
};
