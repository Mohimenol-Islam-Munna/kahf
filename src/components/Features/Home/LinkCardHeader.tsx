import { FC } from "react";
import { LuEqual } from "react-icons/lu";
import { LinkListItemType } from "../../../context";

type Props = {
  item: LinkListItemType;
};

export const LinkCardHeader: FC<Props> = ({ item }): JSX.Element => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center font-semibold text-sm">
        <LuEqual size={16} className="mr-2" />
        <p>Link #{item.id}</p>
      </div>
      <div className="text-sm">
        <button>Remove</button>
      </div>
    </div>
  );
};
