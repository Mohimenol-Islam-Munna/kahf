import { ChangeEvent, FC } from "react";

import { LinkCardHeader } from "./LinkCardHeader";
import { LinkCardContent } from "./LinkCardContent";
import { LinkListItemType } from "../../../context";

type Props = {
  item: LinkListItemType;
  linkListStateChangeHandler: (
    id: number,
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

export const LinkCard: FC<Props> = ({
  item,
  linkListStateChangeHandler,
}): JSX.Element => {
  return (
    <div className="bg-[#FAFAFA] p-4 rounded-md mb-4 last:mb-0">
      <LinkCardHeader item={item} />
      <LinkCardContent
        item={item}
        linkListStateChangeHandler={linkListStateChangeHandler}
      />
    </div>
  );
};
