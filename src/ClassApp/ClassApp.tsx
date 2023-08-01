import { Component } from "react";
import { ClassForm } from "./ClassForm";
import { ProfileInformation } from "../ProfileInformation";
import { TUserInformation } from "../types";
import { TUserInputType } from "../types";

// const defaultUser: TUserInformation = {
//   email: "default@default.com",
//   firstName: "Default",
//   lastName: "Default",
//   phone: "1234567",
//   city: "Hobbiton",
// };

type State = {
  profileData: TUserInformation | null;
  userInputs: TUserInputType;
};

export class ClassApp extends Component<Record<string, never>, State> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      profileData: null,
      userInputs: {
        firstNameInput: "",
        lastNameInput: "",
        userEmailInput: "",
        userCityInput: "",
        userPhoneInput: ["", "", "", ""],
      },
    };
  }

  setUserInputs = (userInputs: TUserInputType) => {
    this.setState({ userInputs });
  };

  setProfileData = (profileData: TUserInformation | null) => {
    this.setState({ profileData });
  };

  render() {
    const { profileData, userInputs } = this.state;
    return (
      <>
        <h2>Class</h2>
        <ProfileInformation userData={profileData} />
        <ClassForm
          userInputs={userInputs}
          setUserInputs={this.setUserInputs}
          setProfileData={this.setProfileData}
        />
      </>
    );
  }
}
