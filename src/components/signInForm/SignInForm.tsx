// Libraries
import React, { useContext, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
// Hooks
import { useNavigate } from "react-router-dom";
import { useSignIn } from "../../hooks/useSignIn";
// Components
import FormErrorBanner from "../formErrorBanner/FormErrorBanner";
import FormLabel from "../formLabel/formLabel";
import Button from "../button/Button";
import InfoModal from "../InfoModal/InfoModal";
import FadeAnimator from "../animators/FadeAnimator";
// Utilities
import { authFormValidator, ErrorObject } from "../../utils/formValidator";
import { tailwindClass } from "../../utils/tailwindClass";
import ToasterHelper from "../../utils/toasterHelper";
// Context
import UserContext from "../../context/UserContext";
import ErrorSnackbar from "../errorSnackbar/ErrorSnackbar";

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
            <div className="hidden">
              {data?.data
                ? ToasterHelper(
                    toast,
                    "You've been successfully signed in",
                    navigator,
                    "success"
                  )
                : null}
            </div>
            <Toaster />
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignInForm;
