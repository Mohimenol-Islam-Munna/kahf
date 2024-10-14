import { ChangeEvent, FC, useEffect, useState } from "react";
import { IoImageOutline } from "react-icons/io5";

import { Input } from "../../UI";
import { ProfileStateType } from "../../../context";
import { useGlobalContextState } from "../../../Hooks";
import { setLocalStorage } from "../../../utils";
import { fileToBase64Handler } from "../../../helpers";

export const ProfileContentBody: FC = (): JSX.Element => {
  const value = useGlobalContextState();
  const { globalContextState, globalContextStateHandler } = value || {};
  const { profileInfo } = globalContextState || {};

  const [profileState, setProfileState] = useState<
    ProfileStateType | undefined
  >(profileInfo);

  const profileStateChangeHandler = async (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.name === "profileImage") {
      let fileToBase64: string | ArrayBuffer | null = "";

      if (e.target.files && e.target.files[0]) {
        const res = await fileToBase64Handler(e.target.files[0]);
        fileToBase64 = res as string | ArrayBuffer | null;
      }

      setProfileState((prev: ProfileStateType | undefined) => {
        if (prev) {
          return {
            ...prev,
            profileImage: e.target.files ? e.target.files[0] : null,
            profileImageBase64: fileToBase64,
          };
        } else {
          return prev;
        }
      });
    } else {
      setProfileState((prev) => {
        if (prev) {
          return { ...prev, [e.target.name]: e.target.value };
        } else {
          return prev;
        }
      });
    }
  };

  const profileSaveHandler = () => {
    globalContextStateHandler &&
      globalContextStateHandler("profileInfo", profileState);

    setLocalStorage("profileInfo", profileState);
  };

  useEffect(() => {
    setProfileState(profileInfo);
  }, [profileInfo]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          profileSaveHandler();
        }}
      >
        <div className="px-6">
          <div className="grid grid-cols-10 gap-1 items-center my-4 bg-[#FAFAFA] rounded-md p-3">
            <div className="col-span-10 md:col-span-3">
              <p>Profile picture</p>
            </div>

            <div className="col-span-10 md:col-span-3 max-w-[150px]">
              <div className="w-full h-[150px] rounded-lg">
                <label
                  htmlFor="profileImage"
                  className="inline-block w-full h-full cursor-pointer
                  rounded-lg border border-[#a89f9f] relative group"
                >
                  <div className="w-full h-full rounded-lg">
                    {profileState?.profileImageBase64 && (
                      <img
                        src={profileState.profileImageBase64 as string}
                        alt={profileState.firstName}
                        className="w-full h-full rounded-lg"
                      />
                    )}
                  </div>
                  <div
                    className="w-full h-full hidden group-hover:flex flex-col justify-center items-center
                absolute top-0 left-0 bg-black text-white rounded-lg opacity-80 "
                  >
                    <IoImageOutline size={20} />
                    <p>Change Image</p>
                  </div>
                </label>
                <input
                  type="file"
                  id="profileImage"
                  name="profileImage"
                  accept=".jpg, .bmp, .png"
                  className="w-full h-full hidden"
                  onChange={(e) => profileStateChangeHandler(e)}
                />
              </div>
            </div>

            <div className="col-span-10 md:col-span-4 ml-2">
              <p>Image must be below 1024x1024, Use PNG, JPG, BMP format.</p>
            </div>
          </div>

          <div className="bg-[#FAFAFA] rounded-md p-3">
            <div>
              <Input
                type="text"
                name={`firstName`}
                value={profileState?.firstName || ""}
                label="First Name"
                placeholder="Enter Your First Name"
                hasColumnLayout={true}
                hasIcon={false}
                changeHandler={profileStateChangeHandler}
              />
            </div>
            <div className="mt-3">
              <Input
                type="text"
                name={`lastName`}
                value={profileState?.lastName || ""}
                label="Last Name"
                placeholder="Enter Your Last Name"
                hasColumnLayout={true}
                hasIcon={false}
                changeHandler={profileStateChangeHandler}
              />
            </div>
            <div className="mt-3">
              <Input
                type="email"
                name={`email`}
                value={profileState?.email || ""}
                label="Email"
                placeholder="Enter Your Email Address"
                hasColumnLayout={true}
                hasIcon={false}
                required={false}
                changeHandler={profileStateChangeHandler}
              />
            </div>
          </div>
        </div>

        <div className="text-white text-right font-normal text-sm mt-16 pt-4 px-6 border-t">
          <button
            type="submit"
            className={`bg-[#6040E8] py-2 px-4 rounded-md ${
              !profileState?.firstName || !profileState?.lastName
                ? "cursor-not-allowed"
                : "cursor-pointer"
            }`}
            disabled={!profileState?.firstName || !profileState?.lastName}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
