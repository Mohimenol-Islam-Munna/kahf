import { FC } from "react";

import { MdArrowForward } from "react-icons/md";
import { LinkListItemType } from "../../context";
import { socialBtnColorMapper } from "../../helpers";
import { SelectIconMapper, SelectIconMapperType } from "./SelectIconMapper";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";

type Props = {
  item: LinkListItemType;
};

export const SocialIconButton: FC<Props> = ({ item }): JSX.Element => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: `${item.id}-${item.platform}` });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div className="my-4">
      <div
        className={`${socialBtnColorMapper(
          item.platform
        )} flex items-center px-3 py-2 rounded-md text-white cursor-move`}
        ref={setNodeRef}
        style={style}
        {...listeners}
        {...attributes}
      >
        <SelectIconMapper
          value={item.platform as SelectIconMapperType}
          hasCustomPosition={false}
        />
        <div className="flex-grow capitalize mx-2">
          <h6>{item.platform}</h6>
        </div>
        <a href={item.linkUrl} target="_blank" className="cursor-pointer">
          <MdArrowForward size={16} />
        </a>
      </div>
    </div>
  );
};
