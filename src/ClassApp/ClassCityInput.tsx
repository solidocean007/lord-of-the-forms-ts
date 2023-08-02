import { Component, ComponentProps } from "react";
import { allCities } from "../utils/all-cities";

type ClassInputProps = {
  labelText: string;
  inputProps: ComponentProps<"input">;
};

export class ClassCityInput extends Component<ClassInputProps> {
  render() {
    const { labelText, inputProps } = this.props;

    return (
      <>
        <label htmlFor="">{labelText}</label>
        <input list="cities" type="text" {...inputProps} />
        <datalist id="cities">
          {allCities.map((city, index) => {
            return <option key={index} value={city} />;
          })}
        </datalist>
      </>
    );
  }
}
