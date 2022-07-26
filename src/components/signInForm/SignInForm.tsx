// Libraries
import React, { Dispatch, useContext, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
// Hooks
import { useNavigate } from "react-router-dom";
import { useSignIn } from "../../hooks/useSignIn";
// Components
import FormErrorBanner from "../formErrorBanner/FormErrorBanner";
import FormLabel from "../formLabel/formLabel";
import Button from "../button/Button";
import InfoModal from "../InfoModal/InfoModal";
// Utilities
import { authFormValidator, ErrorObject } from "../../utils/formValidator";
import { tailwindClass } from "../../utils/tailwindClass";
// Context
import UserContext from "../../context/UserContext";

const SignInForm: React.FC = () => {
  const {
    mutate,
    data,
    isError,
    error,
  }: { mutate: any; data: any; isError: any; error: any } = useSignIn();

  if (data) {
    window.localStorage.setItem("token", data.data.token);
  }

  let navigate = useNavigate();
  const userContext = useContext(UserContext);

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
              <InfoModal
                title={error.message}
                body={error?.response?.data?.error}
                isOpen={true}
                isError={true}
              />
            ) : null}
            {data && data.data ? (
              <InfoModal
                title="Sign In Successfull"
                body="You have been successfully signed into the application"
                isOpen={true}
                isError={false}
                action={() => navigate("/")}
              />
            ) : null}
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignInForm;
