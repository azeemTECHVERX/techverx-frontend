// Libraries
import React, { useContext, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// Components
import FormErrorBanner from "../formErrorBanner/FormErrorBanner";
import FormLabel from "../formLabel/formLabel";
import Button from "../button/Button";
import FadeAnimator from "../animators/FadeAnimator";
import ErrorSnackbar from "../errorSnackbar/ErrorSnackbar";
// Context
import UserContext from "../../context/UserContext";
// Hooks
import { useSignIn } from "../../hooks/useSignIn";
// Utilities
import { authFormValidator, ErrorObject } from "../../utils/formValidator";
import { tailwindClass } from "../../utils/tailwindClass";

const SignInForm: React.FC = () => {
  const {
    mutate,
    data,
    isError,
    error,
  }: { mutate: any; data: any; isError: any; error: any } = useSignIn();

  const navigator = useNavigate();
  const userContext = useContext(UserContext);

  if (data) {
    window.localStorage.setItem("token", data.data.token);
  }

  // Setting User Context on unmounting
  useEffect(() => {
    return userContext?.setUser(data?.data?.user);
  });

  const toaster = () => {
    toast.remove("signuptoaster");
    toast.success("You've been successfully signed in", {
      id: "signintoaster",
      duration: 600,
    });
    setTimeout(() => {
      navigator("/");
    }, 1000);
    return <React.Fragment />;
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values) => {
        mutate(values);
      }}
      validate={(values) => {
        const errors: ErrorObject = authFormValidator(values, false);
        return errors;
      }}
    >
      {({ handleChange, values }) => {
        return (
          <Form>
            <div className="mb-6">
              <FormLabel forInput="email" text="Email" />
              <Field
                type="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                className={tailwindClass.inputFieldClasses}
                placeholder="sample@techverx.com"
              />
              <ErrorMessage name="email">
                {(msg) => {
                  return <FormErrorBanner msg={msg} />;
                }}
              </ErrorMessage>
            </div>
            <div className="mb-6">
              <FormLabel forInput="password" text="Password" />
              <Field
                type="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                placeholder="*******"
                className={tailwindClass.inputFieldClasses}
              />
              <ErrorMessage name="password">
                {(msg) => {
                  return <FormErrorBanner msg={msg} />;
                }}
              </ErrorMessage>
            </div>
            <div className="flex justify-center">
              <Button type="submit" text="Sign In" />
            </div>

            {isError ? (
              <FadeAnimator>
                <ErrorSnackbar errorMsg={error?.response?.data?.error} />
              </FadeAnimator>
            ) : null}
            {data?.data ? toaster() : null}
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignInForm;
