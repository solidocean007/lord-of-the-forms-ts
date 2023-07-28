import { TUserInputType } from "../FunctionalApp/FunctionalApp";
import { TErrorsOfInputs } from "../FunctionalApp/FunctionalForm";
import { allCities } from "../utils/all-cities";

export function isEmailValid(emailAddress: string) {
  // eslint-disable-next-line no-useless-escape
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return !!emailAddress.match(regex);
}

export const validateUserInputs = (
  userInputs: TUserInputType
): TErrorsOfInputs => {
  
  const errors: TErrorsOfInputs = {
    firstNameInputError: "",
    lastNameInputError: "",
    emailInputError: "",
    cityInputError: "",
    phoneNumberInputError: ""
  }

  if (userInputs.firstNameInput.length < 2 && userInputs.firstNameInput !== "") {
    errors.firstNameInputError = "First name must be at least 2 characters long";
  }

  if (userInputs.lastNameInput.length < 2 && userInputs.lastNameInput !== "") {
    errors.lastNameInputError = "Last name must be at least 2 characters long";
  }

  if (!isEmailValid(userInputs.userEmailInput) && userInputs.userEmailInput !== "") {
    errors.emailInputError = "Email is Invalid";
  }

  if (!allCities.includes(userInputs.userCityInput)) {
    errors.cityInputError = "City is Invalid";
  }

  // The phone number validation is handled in the FunctionalPhoneInput component

  return errors;
};
