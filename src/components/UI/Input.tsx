import { ChangeEvent, FC, HTMLInputTypeAttribute } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { RiLinksFill } from "react-icons/ri";

type Props = {
  label: string;
  type?: HTMLInputTypeAttribute;
  name: string;
  placeholder: string;
  value: number | string;
  required?: boolean;
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input: FC<Props> = ({
  label,
  type = "text",
  name,
  value,
  placeholder,
  required = true,
  changeHandler,
}): JSX.Element => {
  return (
    <div className="mt-1">
      <div>
        <label htmlFor={name} className="mb-2">
          {label}
        </label>
      </div>
      <div className="mt-1 relative">
        <RiLinksFill
          size={16}
          className="absolute top-1/2 -translate-y-1/2 left-2"
        />

        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={changeHandler}
          placeholder={placeholder}
          required={required}
          className="w-full border border-[#a89f9f] rounded-md pl-8 pr-2 py-1"
        />
      </div>
    </div>
  );
};
