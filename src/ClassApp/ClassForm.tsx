import { Component } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { ClassInput } from "./ClassInput";
import { validateUserInputs } from "../utils/validations";

//Type imports
import { TUserInputType } from "../types";
import { TUserInformation } from "../types";

type ClassFormProps = {
  userInputs: TUserInputType;
  setUserInputs: (userInputs: TUserInputType) => void;
  setProfileData: (profileData: TUserInformation | null) => void;
};

export class ClassForm extends Component<ClassFormProps> {
  constructor(props: ClassFormProps) {
    super(props);
    this.state = {
      errorsOfInputs: {
        firstNameInputError: "",
        lastNameInputError: "",
        emailInputError: "",
        cityInputError: "",
        phoneNumberInputError: "",
      },
    };
  }

  render() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const validationErrors = validateUserInputs(userInputs);
          setErrorsOfInputs(validationErrors);

          // Transform userInputs into UserInformation
          const newProfileInformation: TUserInformation = {
            firstName: userInputs.firstNameInput,
            lastName: userInputs.lastNameInput,
            email: userInputs.userEmailInput,
            city: userInputs.userCityInput,
            phone: userInputs.userPhoneInput.join(""),
            // ...
          };

          setProfileData(newProfileInformation);
          resetForm();
        }}
      >
        <u>
          <h3>User Information Form</h3>
        </u>

        {/* first name input */}
        <div className="input-wrap">
          <label>{"First Name"}:</label>
          <input placeholder="Bilbo" />
        </div>
        <ErrorMessage message={firstNameErrorMessage} show={true} />

        {/* last name input */}
        <div className="input-wrap">
          <label>{"Last Name"}:</label>
          <input placeholder="Baggins" />
        </div>
        <ErrorMessage message={lastNameErrorMessage} show={true} />

        {/* Email Input */}
        <div className="input-wrap">
          <label>{"Email"}:</label>
          <input placeholder="bilbo-baggins@adventurehobbits.net" />
        </div>
        <ErrorMessage message={emailErrorMessage} show={true} />

        {/* City Input */}
        <div className="input-wrap">
          <label>{"City"}:</label>
          <input placeholder="Hobbiton" />
        </div>
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
  }
}
