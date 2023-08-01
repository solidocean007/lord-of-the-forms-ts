import { Component } from "react";

type ClassInputProps = {
  labelText: string;
  inputProps: {
    type?: string;
    placeholder: string;
    onChange?: (e:  React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
  };
  selectProps?: {
    onChange: (e:  React.ChangeEvent<HTMLSelectElement>) => void;
    value: string;
  };
  options?: string[];
};

export class ClassInput extends Component<ClassInputProps>{
  //...

  render(){
    const {labelText, inputProps, selectProps, options } = this.props;

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
