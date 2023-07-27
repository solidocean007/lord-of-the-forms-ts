import { ComponentProps } from "react";

export const FunctionalInput = ({
  labelText,
  inputProps,
  selectProps,
  options,
}: {
  labelText: string;
  inputProps: ComponentProps<"input">;
  selectProps?: ComponentProps<"select">;
  options?: string[];
}) => {
  return (
    <>
      <label htmlFor="">{labelText}</label>
      {!options ? (
        <>
          <input {...inputProps} />
        </>
      ) : (
        <select {...selectProps}>
          <option value="" disabled>
            {inputProps.placeholder}
          </option>
          {options.map((cityName) => (
            <option key={cityName} value={cityName}>
              {cityName}
            </option>
          ))}
        </select>
      )}
    </>
  );
};
