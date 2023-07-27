import { useState } from "react";
import { ProfileInformation } from "../ProfileInformation";
import { FunctionalForm } from "./FunctionalForm";

export type TPhoneInputState = [string, string, string, string];
export type TUserInputType = {
  firstNameInput: string;
  lastNameInput: string;
  userEmailInput: string;
  userCityInput: string;
  userPhoneInput: TPhoneInputState;
};


export const FunctionalApp = () => {
  const [userInputs, setUserInputs] = useState<TUserInputType>({
    firstNameInput: "",
    lastNameInput: "",
    userEmailInput: "",
    userCityInput: "",
    userPhoneInput: ['','','',''],
  });

  return (
    <>
      <h2>Functional</h2>
      <ProfileInformation userData={null} />
      <FunctionalForm userInputs={userInputs} setUserInputs={setUserInputs} />
    </>
  );
};
