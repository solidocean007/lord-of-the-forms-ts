import { ComponentProps } from "react";

export const FunctionalInput = ({
  labelText,
  inputProps,
  options,
}: {
  labelText: string;
  inputProps: ComponentProps<"input">;
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
        <select {...inputProps}>
          <option value="" disabled selected >{inputProps.placeholder}</option>
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
