import { Component, ComponentProps } from "react";

type ClassInputProps = {
  labelText: string;
  inputProps: ComponentProps<"input">;
};

export class ClassInput extends Component<ClassInputProps> {
  render() {
    const { labelText, inputProps } = this.props;

    return (
      <>
        <label htmlFor="">{labelText}</label>
        <input {...inputProps} />
      </>
    );
  }
}
