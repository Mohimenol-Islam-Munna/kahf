import { FC } from "react";

import { BsGithub } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { CgYoutube } from "react-icons/cg";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { SlSocialInstagram } from "react-icons/sl";
import { MdOutlineSocialDistance } from "react-icons/md";

export type SelectIconMapperType =
  | "github"
  | "facebook"
  | "youtube"
  | "linkedin"
  | "twitter"
  | "instagram";

type Props = {
  value: SelectIconMapperType;
  hasCustomPosition?: boolean;
};

export const SelectIconMapper: FC<Props> = ({
  value,
  hasCustomPosition = true,
}): JSX.Element => {
  switch (value) {
    case "github":
      return (
        <BsGithub
          size={16}
          className={`${
            hasCustomPosition ? "absolute top-1/2 -translate-y-1/2 left-2" : ""
          }`}
        />
      );
    case "facebook":
      return (
        <FaFacebook
          size={16}
          className={`${
            hasCustomPosition ? "absolute top-1/2 -translate-y-1/2 left-2" : ""
          }`}
        />
      );
    case "youtube":
      return (
        <CgYoutube
          size={16}
          className={`${
            hasCustomPosition ? "absolute top-1/2 -translate-y-1/2 left-2" : ""
          }`}
        />
      );
    case "linkedin":
      return (
        <BiLogoLinkedinSquare
          size={16}
          className={`${
            hasCustomPosition ? "absolute top-1/2 -translate-y-1/2 left-2" : ""
          }`}
        />
      );
    case "twitter":
      return (
        <BsTwitterX
          size={16}
          className={`${
            hasCustomPosition ? "absolute top-1/2 -translate-y-1/2 left-2" : ""
          }`}
        />
      );
    case "instagram":
      return (
        <SlSocialInstagram
          size={16}
          className={`${
            hasCustomPosition ? "absolute top-1/2 -translate-y-1/2 left-2" : ""
          }`}
        />
      );
    default:
      return (
        <MdOutlineSocialDistance
          size={16}
          className={`${
            hasCustomPosition ? "absolute top-1/2 -translate-y-1/2 left-2" : ""
          }`}
        />
      );
  }
};
