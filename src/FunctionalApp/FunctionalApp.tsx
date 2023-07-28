import { useState } from "react";
import { ProfileInformation } from "../ProfileInformation";
import { FunctionalForm } from "./FunctionalForm";
import { TUserInformation } from "../types";

export type TPhoneInputState = [string, string, string, string];
export type TUserInputType = {
  firstNameInput: string;
  lastNameInput: string;
  userEmailInput: string;
  userCityInput: string;
  userPhoneInput: TPhoneInputState;
};


export const FunctionalApp = () => {
  const [profileData, setProfileData] = useState<TUserInformation | null>(null);
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
      <ProfileInformation userData={profileData} />
      <FunctionalForm userInputs={userInputs} setUserInputs={setUserInputs} setProfileData={setProfileData}/>
    </>
  );
};
