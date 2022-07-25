export interface AuthFormValues {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface ErrorObject {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export const authFormValidator = (
  values: AuthFormValues,
  isSignUp: boolean
) => {
  const errors: ErrorObject = {};
  if (!values.email) {
    errors.email = "Email is Required!";
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid Email Address";
  }
  if (!values.password) {
    errors.password = "Password is Required!";
  }
  if (values.password && values.password.length < 6) {
    errors.password = "Password should be at least 6 charaters";
  }
  if (!isSignUp && !values.name) {
    errors.name = "Name is Required!";
  }
  if (isSignUp) {
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Password is Empty";
    }
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Password does not Match";
    }
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (values.name && values.name.length < 3) {
      errors.name = "Name should be atleast 3 character long";
    }
  }
  return errors;
};
