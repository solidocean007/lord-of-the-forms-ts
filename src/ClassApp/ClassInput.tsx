import React, { ComponentProps } from "react";
import { render } from "react-dom";

export class ClassInput extends React.Component ({
  labelText,
  inputProps,
  selectProps,
  options,
}: {
  labelText: string;
  inputProps: ComponentProps<"input">;
  selectProps?: ComponentProps<"select">;
  options?: string[];
}) {


  render(){
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
  }
};