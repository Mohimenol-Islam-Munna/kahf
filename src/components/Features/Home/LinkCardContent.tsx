import { ChangeEvent, FC } from "react";
import { Input, Select } from "../../UI";
import { platformList } from "./platformList";
import { LinkListItemType } from "../../../context";

type Props = {
  item: LinkListItemType;
  linkListStateChangeHandler: (
    id: number,
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

export const LinkCardContent: FC<Props> = ({
  item,
  linkListStateChangeHandler,
}): JSX.Element => {
  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    linkListStateChangeHandler(item.id, e);
  };

  const selectChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    linkListStateChangeHandler(item.id, e);
  };

  return (
    <div>
      <Select
        name={`${item.id}-platform`}
        value={`${item.platform}`}
        label="Platform"
        options={platformList}
        placeholder="Select Platform"
        changeHandler={selectChangeHandler}
      />
      <Input
        type="url"
        name={`${item.id}-linkUrl`}
        value={`${item.linkUrl}`}
        label="Link"
        placeholder="Enter Your Link"
        changeHandler={inputChangeHandler}
      />
    </div>
  );
};
