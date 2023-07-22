import { ComponentProps } from 'react';

type Option = { value: string, label: string };

export const FunctionalInput = ({ labelText, inputProps, options }:{labelText: string; inputProps: ComponentProps<'input'>; options?: Option[]}) => {
  return (
    <>
      {!options? (
        <div className="input-wrap">
        <label>{labelText}:</label>
        <input {...inputProps} />
      </div>
      ) : (
        <select>
          {options.map(option =>(
          <option key={option.value} value={option.value}>{option.label}</option>
          ))}
      </select>
      )}
    </>
  );
};
