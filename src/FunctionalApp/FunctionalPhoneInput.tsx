import { useRef, useState } from "react";

export const FunctionalPhoneInput = () => {
  const [phoneInputState, setPhoneInputState] = useState(["", "", ""]);

  const refs = [useRef(), useRef(), useRef(), useRef()];

  const ref0 = refs[0]
  const ref1 = refs[1]
  const ref2 = refs[2]
  const ref3 = refs[3]

  const createOnChangeHandler = (index) = (e) => {
    const lengths = [2, 2, 2, 1];
    const currentMaxLength = lengths[index];
    const nexRef =  refs[index + 1];
    const prevRef =  refs[index - 1];
    const value = e.target.value;
    const shouldGoToNextFef = currentMaxLength === value.length && nextRef.current;
    const shouldGoToPrevRef = value.length === 0;
    const newState = phoneInputState.map((phoneInput, phoneInputIndex) =>
      index === phoneInputIndex ? e.target.value : phoneInput
    )
    if(shouldGoToNextFef){
      nexRef.current?.focus()
    }

    if(shouldGoToPrevRef){
      prevRef.current?.focus()
    }
    setPhoneInputState(newState);
  };

  return (
    <div>
      <label htmlFor="">Phone Number:</label>
      <div>
        <input
          type="text"
          ref={ref0}
          value={phoneInputState[0]}
          onChange={createOnChangeHandler(0)}
        />
        -
        <input
          type="text"
          ref={ref1}
          value={phoneInputState[1]}
          onChange={createOnChangeHandler(1)}
        />
        -
        <input
          type="text"
          ref={ref2}
          value={phoneInputState[2]}
          onChange={createOnChangeHandler(2)}
        />
        -
        <input
          type="text"
          ref={ref3}
          value={phoneInputState[3]}
          onChange={createOnChangeHandler(3)}
        />
      </div>
    </div>
  );
};
