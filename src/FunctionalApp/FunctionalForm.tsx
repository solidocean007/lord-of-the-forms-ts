import { useState } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { FunctionalInput } from "./FunctionInput";
import { FunctionalPhoneInput } from "./FunctionalPhoneInput";
import { allCities } from "../utils/all-cities";

//Validation imports
import { validateUserInputs } from "../utils/validations";

//Type Imports
import { TUserInputType } from "../types";
import { TUserInformation } from "../types";

export type TErrorsOfInputs = {
  firstNameInputError: string;
  lastNameInputError: string;
  emailInputError: string;
  cityInputError: string;
  phoneNumberInputError: string;
};

export type TSetErrorsOfInputs = (errors: TErrorsOfInputs) => void;

export const FunctionalForm = ({
  userInputs,
  setUserInputs,
  setProfileData,
}: {
  userInputs: TUserInputType;
  setUserInputs: (userInputs: TUserInputType) => void;
  setProfileData: (profileData: TUserInformation) => void;
}) => {
  const [triedSubmit, setTriedSubmit] = useState(false);
  const [errorsOfInputs, setErrorsOfInputs] = useState<TErrorsOfInputs>({
    firstNameInputError: "",
    lastNameInputError: "",
    emailInputError: "",
    cityInputError: "",
    phoneNumberInputError: "",
  });

  function resetForm() {
    setUserInputs({
      firstNameInput: "",
      lastNameInput: "",
      userCityInput: "",
      userEmailInput: "",
      userPhoneInput: ["", "", "", ""],
    });
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setTriedSubmit(true);
        const validationErrors = validateUserInputs(userInputs); // declares a variable to an object of error properties of empty strings or error messages.
        setErrorsOfInputs(validationErrors); // sets the state of errorsOfInputs with the messages or empty strings.

        const errorValues = Object.values(validationErrors); // returns an array of the error messages from the validation of the userInputs
        if (errorValues.some((error) => error !== "")) {
          // checks if any of the strings in the errorValues array are not empty
          alert("Bad data input"); // alert if any string in errorValues is not empty
          return;
        }

        const newProfileInformation: TUserInformation = {
          // declare an object of inputs from the user this happens if the previous function doesn't produce any errors.
          firstName: userInputs.firstNameInput,
          lastName: userInputs.lastNameInput,
          email: userInputs.userEmailInput,
          city: userInputs.userCityInput,
          phone: userInputs.userPhoneInput.join(""),
        };

        if (Object.values(validationErrors).every((error) => error === "")) {
          // if all of the values in the error object are empty..
          setProfileData(newProfileInformation); // setProfileData with the object of inputs declared with newProfileInformation
        }
        resetForm(); // reset the form regardless
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
            onChange: (e) => {
              setUserInputs({ ...userInputs, firstNameInput: e.target.value });

              // Validate input on change and update error state
              const validationErrors = validateUserInputs({
                ...userInputs,
                firstNameInput: e.target.value,
              });
              setErrorsOfInputs(validationErrors);
            },
          }}
        />
      </div>
      <ErrorMessage
        message={errorsOfInputs.firstNameInputError}
        show={triedSubmit && errorsOfInputs.firstNameInputError.length > 0}
      />

      {/* last name input */}
      <div className="input-wrap">
        <FunctionalInput
          labelText={"Last Name"}
          inputProps={{
            type: "text",
            placeholder: "Baggins",
            onChange: (e) => {
              setUserInputs({ ...userInputs, lastNameInput: e.target.value });

              // Validate input on change and update error state
              const validationErrors = validateUserInputs({
                ...userInputs,
                lastNameInput: e.target.value,
              });
              setErrorsOfInputs(validationErrors);
            },
          }}
        />
      </div>
      <ErrorMessage
        message={errorsOfInputs.lastNameInputError}
        show={triedSubmit && errorsOfInputs.lastNameInputError.length > 0}
      />

      {/* Email Input */}
      <div className="input-wrap">
        <FunctionalInput
          labelText={"Email"}
          inputProps={{
            type: "email",
            placeholder: "bilbo-baggins@adventurehobbits.net",
            onChange: (e) => {
              setUserInputs({ ...userInputs, userEmailInput: e.target.value });

              // Validate input on change and update error state
              const validationErrors = validateUserInputs({
                ...userInputs,
                userEmailInput: e.target.value,
              });
              setErrorsOfInputs(validationErrors);
            },
          }}
        />
      </div>
      <ErrorMessage
        message={errorsOfInputs.emailInputError}
        show={triedSubmit && errorsOfInputs.emailInputError.length > 0}
      />

      {/* City Input */}
      <div className="input-wrap">
        <FunctionalInput
          labelText={"City"}
          inputProps={{
            placeholder: "Hobbiton",
          }}
          selectProps={{
            onChange: (e) => {
              setUserInputs({ ...userInputs, userCityInput: e.target.value });

              // Validate input on change and update error state
              const validationErrors = validateUserInputs({
                ...userInputs,
                userCityInput: e.target.value,
              });
              setErrorsOfInputs(validationErrors);
            },
          }}
          options={allCities}
        />
      </div>
      <ErrorMessage
        message={errorsOfInputs.cityInputError}
        show={triedSubmit && errorsOfInputs.cityInputError.length > 0}
      />

      <div className="input-wrap">
        <label htmlFor="phone">Phone:</label>
        <div>
          <FunctionalPhoneInput
            userInputs={userInputs}
            setUserInputs={setUserInputs}
            setErrorsOfInputs={setErrorsOfInputs}
          />
        </div>
      </div>

      <ErrorMessage
        message={errorsOfInputs.phoneNumberInputError}
        show={triedSubmit && errorsOfInputs.phoneNumberInputError.length > 0}
      />

      <input type="submit" value="Submit" />
    </form>
  );
};
