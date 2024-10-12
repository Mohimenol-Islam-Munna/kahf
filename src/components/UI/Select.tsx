import { ChangeEvent, FC, HTMLInputTypeAttribute } from "react";
import { IoEyeOutline } from "react-icons/io5";
import {
  SelectIconMapper,
  SelectIconMapperType,
} from "../../helpers/selectIconMapper";

type SelectItemType = { label: string; value: any };

type Props = {
  label: string;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
  name: string;
  value: number | string;
  options: Array<SelectItemType>;
  required?: boolean;
  changeHandler: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export const Select: FC<Props> = ({
  label,
  name,
  value,
  placeholder,
  options,
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
        {value && SelectIconMapper(value as SelectIconMapperType)}

        <select
          id={name}
          name={name}
          value={value}
          onChange={changeHandler}
          required={required}
          className={`w-full border border-[#a89f9f] rounded-md pr-2 py-1 ${
            value ? "pl-7" : "pl-2"
          }`}
        >
          <option value="">{placeholder}</option>
          {options.map((item: SelectItemType, index: number) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
