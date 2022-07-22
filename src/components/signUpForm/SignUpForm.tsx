// Import from libraries
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
// Import from components
import FormErrorBanner from "../formErrorBanner/FormErrorBanner";
import FormLabel from "../formLabel/formLabel";
import Button from "../button/Button";
// Import From Utilities
import {
  authFormValidator,
  AuthFormValues,
  ErrorObject,
} from "../../utils/formValidator";
import { tailwindClass } from "../../utils/tailwindClass";

const SignUpForm: React.FC = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validate={(values) => {
        const errors: ErrorObject = authFormValidator(values, true);
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
              <FormLabel forInput="passowrd" text="Password" />
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
            <div className="mb-6">
              <FormLabel forInput="confirmPassword" text="Confirm Password" />
              <Field
                type="password"
                id="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                placeholder="*******"
                className={tailwindClass.inputFieldClasses}
              />
              <ErrorMessage name="confirmPassword">
                {(msg) => {
                  return <FormErrorBanner msg={msg} />;
                }}
              </ErrorMessage>
            </div>

            <div className="flex justify-center">
              <Button type="submit" text="Sign Up" />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
