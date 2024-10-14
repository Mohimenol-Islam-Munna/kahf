import { ChangeEvent, FC, HTMLInputTypeAttribute } from "react";
import { RiLinksFill } from "react-icons/ri";

type Props = {
  label: string;
  type?: HTMLInputTypeAttribute;
  name: string;
  placeholder: string;
  value: number | string;
  required?: boolean;
  hasIcon?: boolean;
  hasColumnLayout?: boolean;
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input: FC<Props> = ({
  label,
  type = "text",
  name,
  value,
  placeholder,
  required = true,
  hasColumnLayout = false,
  hasIcon = true,
  changeHandler,
}): JSX.Element => {
  return (
    <div
      className={`mt-1 ${
        hasColumnLayout ? "grid grid-cols-10 gap-1 items-center" : ""
      }`}
    >
      <div className={` ${hasColumnLayout ? "col-span-10 md:col-span-3" : ""}`}>
        <label htmlFor={name} className="mb-2">
          {label}
          {required && "*"}
        </label>
      </div>

      <div
        className={`relative ${
          hasColumnLayout ? "col-span-10 md:col-span-7 " : "mt-1"
        }`}
      >
        {hasIcon && (
          <RiLinksFill
            size={16}
            className="absolute top-1/2 -translate-y-1/2 left-2"
          />
        )}

        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={changeHandler}
          placeholder={placeholder}
          required={required}
          className={`w-full border border-[#a89f9f] rounded-md  pr-2 py-1 ${
            hasIcon ? "pl-8" : "pl-2"
          }`}
        />
      </div>
    </div>
  );
};
