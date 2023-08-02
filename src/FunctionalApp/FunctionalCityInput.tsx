import { ComponentProps } from "react";
import { allCities } from "../utils/all-cities";

export const FunctionalCityInput = ({
  labelText,
  inputProps,
}: {
  labelText: string;
  inputProps: ComponentProps<"input">;
}) => {
  return (
    <>
      <label htmlFor="">{labelText}</label>
      <input list="cities" type="text" {...inputProps} />
      <datalist id="cities">
        {allCities.map((city, index) => {
        return <option key={index} value={city}/>
      })}
      </datalist>
    </>
  );
};
