import { FC } from "react";
import { LuEqual } from "react-icons/lu";
import { LinkListItemType } from "../../../context";

type Props = {
  serial: number;
  item: LinkListItemType;
  linkRemoveHandler: (id: number) => void;
};

export const LinkCardHeader: FC<Props> = ({
  item,
  serial,
  linkRemoveHandler,
}): JSX.Element => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center font-semibold text-sm">
        <LuEqual size={16} className="mr-2" />
        <p>Link #{serial + 1}</p>
      </div>
      <div className="text-sm">
        <button
          type="button"
          onClick={() => {
            linkRemoveHandler(item.id);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
