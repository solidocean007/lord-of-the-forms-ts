import { useState } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { FunctionalInput } from "./FunctionInput";
import { FunctionalPhoneInput } from "./FunctionalPhoneInput";
import { allCities } from "../utils/all-cities";

//Validation imports
import { isEmailValid } from "../utils/validations";

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "City is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

import { TUserInputType } from "./FunctionalApp";

export const FunctionalForm = ({
  userInputs,
  setUserInputs,
}: {
  userInputs: TUserInputType;
}) => {
  const isFirstNameValid =
    userInputs.firstNameInput.length >= 2 || userInputs.firstNameInput === "";
  const isLastNameValid =
    userInputs.lastNameInput.length >= 2 || userInputs.lastNameInput === "";
  const isUserEmailGood =
    isEmailValid(userInputs.userEmailInput) || userInputs.userEmailInput === "";
  const isCityValid = allCities.includes(userInputs.userCityInput);
  // const isPhoneNumberValid;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <u>
        <h3>User Information Form</h3>
      </u>

      {/* first name input */}
      <div className="input-wrap">
        <FunctionalInput
          labelText={"First Name"}
          inputProps={{
            type: "text",
            placeholder: "Bilbo",
            onChange: (e) =>
              setUserInputs({ ...userInputs, firstNameInput: e.target.value }),
            value: userInputs.firstNameInput,
          }}
        />
      </div>
      {!isFirstNameValid && (
        <ErrorMessage message={firstNameErrorMessage} show={true} />
      )}

      {/* last name input */}
      <div className="input-wrap">
        <FunctionalInput
          labelText={"Last Name"}
          inputProps={{
            type: "text",
            placeholder: "Baggins",
            onChange: (e) => setUserInputs({...userInputs, lastNameInput: e.target.value}),
            value: userInputs.lastNameInput,
          }}
        />
      </div>
      {!isLastNameValid && (
        <ErrorMessage message={lastNameErrorMessage} show={true} />
      )}

      {/* Email Input */}
      <div className="input-wrap">
        <FunctionalInput
          labelText={"Email"}
          inputProps={{
            type: "email",
            placeholder: "bilbo-baggins@adventurehobbits.net",
            onChange: (e) => setUserInputs({...userInputs, userEmailInput: e.target.value}),
            value: userInputs.userEmail,
          }}
        />
      </div>
      {!isUserEmailGood && (
        <ErrorMessage message={emailErrorMessage} show={true} />
      )}

      {/* City Input */}
      <div className="input-wrap">
        <FunctionalInput
          labelText={"City"}
          inputProps={{
            placeholder: "Hobbiton",
            onChange: (e) => setUserInputs({...userInputs, userCityInput: e.target.value}),
            value: userInputs.userCity,
          }}
          options={allCities}
        />
      </div>
      {!isCityValid && <ErrorMessage message={cityErrorMessage} show={true} />}

      <div className="input-wrap">
        <label htmlFor="phone">Phone:</label>
        <div >
          <FunctionalPhoneInput />
        </div>
      </div>

      <ErrorMessage message={phoneNumberErrorMessage} show={true} />

      <input type="submit" value="Submit" />
    </form>
  );
};
