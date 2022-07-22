// Import from Libraries
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
// Components
import FormErrorBanner from "../formErrorBanner/FormErrorBanner";
import FormLabel from "../formLabel/formLabel";
import Button from "../button/Button";
// Utilities
import { authFormValidator, ErrorObject } from "../../utils/formValidator";
import { tailwindClass } from "../../utils/tailwindClass";

const SignInForm: React.FC = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values) => {
        // Handle Submitting Form
        console.log(values);
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
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignInForm;
