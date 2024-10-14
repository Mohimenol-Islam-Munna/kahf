import { FC } from "react";
import { SocialIconButton } from "./SocialIconButton";
import { useGlobalContextState } from "../../Hooks";
import { LinkListItemType } from "../../context";
import { DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { setLocalStorage } from "../../utils";

type Props = {
  isFinalPreview?: boolean;
};

export const ProfileViewer: FC<Props> = ({
  isFinalPreview = false,
}): JSX.Element => {
  const value = useGlobalContextState();
  const { globalContextState, globalContextStateHandler } = value || {};
  const { linkList, profileInfo } = globalContextState || {};

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active?.id !== over?.id && linkList) {
      const oldIndex = linkList.findIndex(
        (item: LinkListItemType) =>
          `${item.id}-${item.platform}` === `${active?.id}`
      );
      const newIndex = linkList.findIndex(
        (item: LinkListItemType) =>
          `${item.id}-${item.platform}` === `${over?.id}`
      );

      const result = arrayMove(linkList, oldIndex, newIndex);

      globalContextStateHandler &&
        globalContextStateHandler("linkList", result);

      setLocalStorage("linkList", result);
    }
  };

  return (
    <div
      className={`${
        isFinalPreview
          ? "w-[350px]"
          : "w-full max-w-[300px] bg-[url(/frame.png)] bg-no-repeat bg-center bg-full"
      }`}
    >
      <div className={`w-full ${isFinalPreview ? "p-10" : "p-10 pt-16"}`}>
        {profileInfo?.firstName ? (
          <div>
            <div className="w-[60px] h-[60px] mx-auto mt-2 rounded-full ring-2 ring-[#6040E8]">
              <img
                src={profileInfo?.profileImageBase64 as string}
                alt={profileInfo?.firstName}
                className="w-full h-full rounded-full"
              />
            </div>
            <h2 className="text-center mt-2">{`${profileInfo?.firstName} ${profileInfo?.lastName}`}</h2>
            <p className="text-center mt-1">{profileInfo?.email}</p>
          </div>
        ) : (
          <div className="py-16">
            <p className="text-center mt-1">No Profile Info Found</p>
          </div>
        )}

        <DndContext onDragEnd={handleDragEnd}>
          <div className="mt-10">
            <SortableContext
              items={
                linkList
                  ? linkList.map((item) => `${item.id}-${item.platform}`)
                  : []
              }
              strategy={verticalListSortingStrategy}
            >
              {linkList?.map((item: LinkListItemType) => (
                <SocialIconButton
                  key={`${item.id}-${item.platform}`}
                  item={item}
                />
              ))}
            </SortableContext>
          </div>
        </DndContext>
      </div>
    </div>
  );
};
