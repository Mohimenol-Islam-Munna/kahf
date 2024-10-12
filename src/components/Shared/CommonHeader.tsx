import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiLinksFill } from "react-icons/ri";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";

type Props = {};

export const CommonHeader: FC<Props> = (): JSX.Element => {
  return (
    <div className="p-4 bg-white rounded-md">
      <div className="flex items-center">
        <div className="basis-1/3 sm:basis-1/4 flex items-center">
          <div className="bg-[#6040E8] p-[1px] rounded-[5px] mr-1">
            <RiLinksFill color="white" size={16} className="rotate-45" />
          </div>
          <h5 className="font-bold hidden sm:block">devlinks</h5>
        </div>

        <div className="basis-1/3 sm:basis-2/4 flex items-center justify-center">
          <NavLink to="/">
            {({ isActive }: { isActive: boolean }) => (
              <div
                className={`flex items-center py-2 px-5 rounded-md mr-2 ${
                  isActive && "bg-[#EFECFB]"
                } `}
              >
                <div className="mr-1">
                  <RiLinksFill
                    size={16}
                    className={`${isActive && "text-[#6040E8]"} `}
                  />
                </div>
                <h5 className="hidden sm:block">links</h5>
              </div>
            )}
          </NavLink>
          <NavLink to="/profile">
            {({ isActive }: { isActive: boolean }) => (
              <div
                className={`flex items-center py-2 px-5 rounded-md mr-2 ${
                  isActive && "bg-[#EFECFB]"
                } `}
              >
                <div className="mr-1">
                  <FaRegCircleUser
                    size={16}
                    className={`${isActive && "text-[#6040E8]"} `}
                  />
                </div>
                <h5 className="hidden sm:block">Profile details</h5>
              </div>
            )}
          </NavLink>
        </div>

        <div className="basis-1/3 sm:basis-1/4 text-right">
          <Link to="/preview">
            <button className="border border-[#6040E8] py-2 px-4 rounded-md">
              <IoEyeOutline size={16} className="text-[#6040E8] sm:hidden" />
              <span className="hidden sm:block">Preview</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
