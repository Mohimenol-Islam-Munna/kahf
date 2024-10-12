import { ChangeEvent, FC, useEffect, useState } from "react";
import { IoAddOutline } from "react-icons/io5";

import { useGlobalContextState } from "../../../Hooks";
import { LinkListItemType, LinkListType } from "../../../context";
import { LinkCard } from "./LinkCard";

export const LinkCardContainer: FC = (): JSX.Element => {
  const value = useGlobalContextState();
  const { globalContextState, globalContextStateHandler } = value || {};
  const { linkList } = globalContextState || {};

  const [linkListState, setLinkListState] = useState<LinkListType | undefined>(
    linkList
  );

  const linkListStateChangeHandler = (
    id: number,
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setLinkListState((prev: LinkListType | undefined) => {
      if (prev) {
        const findIndex = prev.findIndex(
          (item: LinkListItemType) => item.id === id
        );

        if (findIndex >= 0) {
          const targetLinkItem = prev[findIndex];

          const propertyName = e.target.name.split("-")[1];

          targetLinkItem[propertyName] = e.target.value;

          prev[findIndex] = targetLinkItem;

          return [...prev];
        }
      }

      return prev;
    });
  };

  const addLinkHandler = () => {
    const newLinkItem = {
      id: 1,
      title: "",
      linkUrl: "",
      platform: "",
    };

    if (linkListState) {
      const linkIndex = linkListState.reduce(
        (prev: number, item: LinkListItemType) =>
          item.id > prev ? item.id : prev,
        0
      );

      newLinkItem.id = linkIndex + 1;

      setLinkListState([...linkListState, newLinkItem]);
    } else {
      setLinkListState([newLinkItem]);
    }
  };

  const linkSaveHandler = () => {
    globalContextStateHandler &&
      globalContextStateHandler("linkList", linkListState);
  };

  useEffect(() => {
    setLinkListState(linkList);
  }, [linkList]);

  console.log("linkList :", linkList);
  console.log("linkListState :", linkListState);

  return (
    <div>
      <div className="mt-8 mb-4">
        <button
          onClick={addLinkHandler}
          className="w-full flex items-center justify-center border border-[#6040E8] py-1 px-4 rounded-md"
        >
          <IoAddOutline size={16} className="text-[#6040E8] mr-2" />
          <span className="text-[#6040E8]">Add New Link</span>
        </button>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          linkSaveHandler();
        }}
      >
        {linkListState?.map((item: LinkListItemType, index: number) => (
          <LinkCard
            key={index}
            item={item}
            linkListStateChangeHandler={linkListStateChangeHandler}
          />
        ))}
        <div className="text-white text-right font-normal text-sm">
          <button type="submit" className="bg-[#6040E8] py-2 px-4 rounded-md">
            <span className="hidden sm:block">Save</span>
          </button>
        </div>
      </form>
    </div>
  );
};
