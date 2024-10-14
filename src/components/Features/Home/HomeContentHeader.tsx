import { FC } from "react";

export const HomeContentHeader: FC = (): JSX.Element => {
  return (
    <div className="px-6">
      <h2 className="font-bold text-3xl">Customize Your Links</h2>
      <p className="font-normal text-sm mt-2">
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>
    </div>
  );
};
