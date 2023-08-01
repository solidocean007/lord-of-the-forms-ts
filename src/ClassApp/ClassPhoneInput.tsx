import { ChangeEventHandler, useRef } from "react";
import { TUserInputType } from "../types";
import { TPhoneInputState } from "../types";

import { validateUserInputs } from "../utils/validations";
import { TErrorsOfInputs } from "../FunctionalApp/FunctionalForm";

export const ClassPhoneInput = ({
  userInputs,
  setUserInputs,
  setErrorsOfInputs,
}: {
  userInputs: TUserInputType;
  setUserInputs: (userInputs: TUserInputType) => void;
  setErrorsOfInputs: (errors: TErrorsOfInputs) => void;
}) => {
  const refs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const ref0 = refs[0];
  const ref1 = refs[1];
  const ref2 = refs[2];
  const ref3 = refs[3];

  const createOnChangeHandler =
    (index: 0 | 1 | 2 | 3): ChangeEventHandler<HTMLInputElement> =>
    (e) => {
      const lengths = [2, 2, 2, 1];
      const currentMaxLength = lengths[index];
      const nextRef = refs[index + 1];
      const prevRef = refs[index - 1];
      const value = e.target.value;

      if (/^\d+$/.test(value) || value === "") {
        const shouldGoToNextRef =
          value.length === currentMaxLength && nextRef?.current;
        const shouldGoToPrevRef = value.length === 0;

        const newState = userInputs.userPhoneInput.map(
          (phoneInput, phoneInputIndex) =>
            index === phoneInputIndex ? value : phoneInput
        ) as TPhoneInputState;

        if (shouldGoToNextRef) {
          nextRef?.current?.focus();
        }

        if (shouldGoToPrevRef) {
          prevRef?.current?.focus();
        }

        setUserInputs({
          ...userInputs,
          userPhoneInput: newState,
        });

        // Validate input after setting state and update error state
        const validationErrors = validateUserInputs({
          ...userInputs,
          userPhoneInput: newState,
        });
        setErrorsOfInputs(validationErrors);
      }
    };

  return (
    <div id="phone-input-wrap">
      <input
        id="phone-input-1"
        type="text"
        ref={ref0}
        value={userInputs.userPhoneInput[0]}
        onChange={createOnChangeHandler(0)}
      />
      -
      <input
        id="phone-input-2"
        type="text"
        ref={ref1}
        value={userInputs.userPhoneInput[1]}
        onChange={createOnChangeHandler(1)}
      />
      -
      <input
        id="phone-input-3"
        type="text"
        ref={ref2}
        value={userInputs.userPhoneInput[2]}
        onChange={createOnChangeHandler(2)}
      />
      -
      <input
        id="phone-input-4"
        type="text"
        ref={ref3}
        value={userInputs.userPhoneInput[3]}
        onChange={createOnChangeHandler(3)}
      />
    </div>
  );
};
