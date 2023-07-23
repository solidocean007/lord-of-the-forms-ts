import { useState } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { FunctionalInput } from "./FunctionInput";
import { FunctionalPhoneInput } from "./FunctionalPhoneInput";

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "State is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

export const FunctionalForm = () => {
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userCity, setUserCity] = useState("");

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
            onChange: (e) => setFirstNameInput(e.target.value),
            value: firstNameInput,
          }}
        />
      </div>
      <ErrorMessage message={firstNameErrorMessage} show={true} />

      {/* last name input */}
      <div className="input-wrap">
        <FunctionalInput
          labelText={"Last Name"}
          inputProps={{
            type: "text",
            placeholder: "Baggins",
            onChange: (e) => setLastNameInput(e.target.value),
            value: lastNameInput,
          }}
        />
      </div>
      <ErrorMessage message={lastNameErrorMessage} show={true} />

      {/* Email Input */}
      <div className="input-wrap">
        <FunctionalInput
          labelText={"Email"}
          inputProps={{
            type: "email",
            placeholder: "bilbo-baggins@adventurehobbits.net",
            onChange: (e) => setUserEmail(e.target.value),
            value: userEmail,
          }}
        />
      </div>
      <ErrorMessage message={emailErrorMessage} show={true} />

      {/* City Input */}
      <div className="input-wrap">
        <FunctionalInput
          labelText={"City"}
          inputProps={{
            placeholder: "Hobbiton",
            onChange: (e) => setUserCity(e.target.value),
            value: userCity,
          }}
        />
      </div>
      <ErrorMessage message={cityErrorMessage} show={true} />

      <div className="input-wrap">
        <label htmlFor="phone">Phone:</label>
        <div id="phone-input-wrap">
          <FunctionalPhoneInput />
        </div>
      </div>

      <ErrorMessage message={phoneNumberErrorMessage} show={true} />

      <input type="submit" value="Submit" />
    </form>
  );
};
