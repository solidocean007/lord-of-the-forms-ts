import { Component } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { ClassInput } from "./ClassInput";
import { ClassPhoneInput } from "./ClassPhoneInput";
import { validateUserInputs } from "../utils/validations";
import { allCities } from "../utils/all-cities";

//Type imports
import { TUserInputType } from "../types";
import { TUserInformation } from "../types";

type ClassFormProps = {
  userInputs: TUserInputType;
  setUserInputs: (userInputs: TUserInputType) => void;
  setProfileData: (profileData: TUserInformation | null) => void;
};

type TErrorsOfInputs = {
  firstNameInputError: string;
  lastNameInputError: string;
  emailInputError: string;
  cityInputError: string;
  phoneNumberInputError: string;
};

export class ClassForm extends Component<ClassFormProps> {
  state = {
    triedSubmit: false,
    errorsOfInputs: {
      firstNameInputError: "",
      lastNameInputError: "",
      emailInputError: "",
      cityInputError: "",
      phoneNumberInputError: "",
    },
  };

  setErrorsOfInputs = (errorsOfInputs: TErrorsOfInputs) => {
    this.setState({ errorsOfInputs });
  };

  render() {
    const { userInputs, setUserInputs, setProfileData } = this.props;

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
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          const validationErrors = validateUserInputs(userInputs);
          this.setErrorsOfInputs(validationErrors);

          const errorValues = Object.values(validationErrors);
          if (errorValues.some((error) => error !== "")) {
            alert("Bad data input");
            return;
          }

          const newProfileInformation: TUserInformation = {
            firstName: userInputs.firstNameInput,
            lastName: userInputs.lastNameInput,
            email: userInputs.userEmailInput,
            city: userInputs.userCityInput,
            phone: userInputs.userPhoneInput.join(""),
            // ...
          };

          if (Object.values(validationErrors).every((error) => error === "")) {
            setProfileData(newProfileInformation);
          }

          resetForm();
        }}
      >
        <u>
          <h3>User Information Form</h3>
        </u>

        {/* first name input */}
        <div className="input-wrap">
          <ClassInput
            labelText={"First Name"}
            inputProps={{
              type: "text",
              placeholder: "Bilbo",
              onChange: (e) => {
                setUserInputs({
                  ...userInputs,
                  firstNameInput: e.target.value,
                });
                const validationErrors = validateUserInputs({
                  ...userInputs,
                  firstNameInput: e.target.value,
                });
                this.setErrorsOfInputs(validationErrors);
              },
              value: userInputs.firstNameInput,
            }}
          />
        </div>
        <ErrorMessage
          message={this.state.errorsOfInputs.firstNameInputError}
          show={this.state.errorsOfInputs.firstNameInputError.length > 0}
        />

        {/* last name input */}
        <div className="input-wrap">
          <ClassInput
            labelText={"Last Name"}
            inputProps={{
              type: "text",
              placeholder: "Baggins",
              onChange: (e) => {
                setUserInputs({ ...userInputs, lastNameInput: e.target.value });
                const validationErrors = validateUserInputs({
                  ...userInputs,
                  lastNameInput: e.target.value,
                });
                this.setErrorsOfInputs(validationErrors);
              },
              value: userInputs.lastNameInput,
            }}
          />
        </div>
        <ErrorMessage
          message={this.state.errorsOfInputs.lastNameInputError}
          show={this.state.errorsOfInputs.lastNameInputError.length > 0}
        />

        {/* Email Input */}
        <div className="input-wrap">
          <ClassInput
            labelText={"Email"}
            inputProps={{
              type: "email",
              placeholder: "bilbo-baggins@adventurehobbits.net",
              onChange: (e) => {
                setUserInputs({
                  ...userInputs,
                  userEmailInput: e.target.value,
                });
                const validationErrors = validateUserInputs({
                  ...userInputs,
                  userEmailInput: e.target.value,
                });
                this.setErrorsOfInputs(validationErrors);
              },
              value: userInputs.userEmailInput,
            }}
          />
        </div>
        <ErrorMessage
          message={this.state.errorsOfInputs.emailInputError}
          show={this.state.errorsOfInputs.emailInputError.length > 0}
        />

        {/* City Input */}
        <div className="input-wrap">
          <ClassInput
            labelText={"City"}
            inputProps={{
              placeholder: "Hobbiton",
            }}
            selectProps={{
              onChange: (e) => {
                setUserInputs({ ...userInputs, userCityInput: e.target.value });
                const validationErrors = validateUserInputs({
                  ...userInputs,
                  userCityInput: e.target.value,
                });
                this.setErrorsOfInputs(validationErrors);
              },
              value: userInputs.userCityInput,
            }}
            options={allCities}
          />
        </div>
        <ErrorMessage
          message={this.state.errorsOfInputs.cityInputError}
          show={this.state.errorsOfInputs.cityInputError.length > 0}
        />

        <div className="input-wrap">
          <label htmlFor="phone">Phone:</label>
          <div>
            <ClassPhoneInput
              userInputs={userInputs}
              setUserInputs={setUserInputs}
              setErrorsOfInputs={this.setErrorsOfInputs}
            />
          </div>
        </div>

        <ErrorMessage
          message={this.state.errorsOfInputs.phoneNumberInputError}
          show={this.state.errorsOfInputs.phoneNumberInputError.length > 0}
        />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
