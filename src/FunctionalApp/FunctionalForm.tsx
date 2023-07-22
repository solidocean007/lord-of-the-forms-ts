import { useState } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { FunctionalInput } from "./FunctionInput";

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "State is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

export const FunctionalForm = () => {
  const [firstNameInput, setFirstNameInput]=useState('');
  const [lastNameInput, setLastNameInput]=useState('');
  const [userEmail, setUserEmail]=useState('');

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
      <FunctionalInput
        labelText={'First Name'}
        inputProps={{
          type: 'text',
          placeholder: 'Bilbo',
          onChange: (e) => setFirstNameInput(e.target.value),
          value: firstNameInput,
        }}
      />
      <ErrorMessage message={firstNameErrorMessage} show={true} /> 
      

      {/* last name input */}
      <FunctionalInput
        labelText={"Last Name"}
        inputProps={{
          type: 'text',
          placeholder: 'Baggins',
          onChange: (e) => setLastNameInput(e.target.value),
          value: lastNameInput,
        }}
      />
      <ErrorMessage message={lastNameErrorMessage} show={true} />

      {/* Email Input */}
      <FunctionalInput
        labelText={'Email'}
        inputProps={{
          type: 'email',
          placeholder: 'bilbo-baggins@adventurehobbits.net',
          onChange: (e)=> setUserEmail(e.target.value),
          value: userEmail,
        }}
      />
      <ErrorMessage message={emailErrorMessage} show={true} />

      {/* City Input */}
      <FunctionalInput
        labelText={'City'}
        inputProps={{
          type: ''
        }}
      />
      {/* <div className="input-wrap">
        <label>{"City"}:</label>
        <input placeholder="Hobbiton" />
      </div> */}
      <ErrorMessage message={cityErrorMessage} show={true} />

      <div className="input-wrap">
        <label htmlFor="phone">Phone:</label>
        <div id="phone-input-wrap">
          <input type="text" id="phone-input-1" placeholder="55" />
          -
          <input type="text" id="phone-input-2" placeholder="55" />
          -
          <input type="text" id="phone-input-3" placeholder="55" />
          -
          <input type="text" id="phone-input-4" placeholder="5" />
        </div>
      </div>

      <ErrorMessage message={phoneNumberErrorMessage} show={true} />

      <input type="submit" value="Submit" />
    </form>
  );
};
