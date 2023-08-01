export type TUserInformation = {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  phone: string;
};

export type TPhoneInputState = [string, string, string, string];

export type TUserInputType = {
  firstNameInput: string;
  lastNameInput: string;
  userEmailInput: string;
  userCityInput: string;
  userPhoneInput: TPhoneInputState;
};
