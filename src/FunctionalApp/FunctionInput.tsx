import { ComponentProps } from "react";

export const FunctionalInput = ({
  labelText,
  inputProps,
}: {
  labelText: string;
  inputProps: ComponentProps<"input">;
}) => {
  return (
    <>
      <label htmlFor="">{labelText}</label>
      <input {...inputProps} />
    </>
  );
};
