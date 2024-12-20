export interface SignUpData {
  email: string;
  phone_number: string;
  password: string;
  confirm_password: string;
  signup_type: "regular";
  checked_terms_conditions: boolean;
}

export interface SignInData {
  email: string;
  password: string;
}
