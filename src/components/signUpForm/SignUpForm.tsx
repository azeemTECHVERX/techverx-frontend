// Import from libraries
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
// Importing custom hooks
import { usePostUser } from "../../hooks/usePostUser";
// Import from components
import FormErrorBanner from "../formErrorBanner/FormErrorBanner";
import FormLabel from "../formLabel/formLabel";
import Button from "../button/Button";
import InfoModal from "../InfoModal/InfoModal";
// Import From Utilities
import { authFormValidator, ErrorObject } from "../../utils/formValidator";
import { tailwindClass } from "../../utils/tailwindClass";

const SignUpForm: React.FC = (props) => {
  console.log(props);
  const {
    mutate,
    data,
    isError,
    error,
  }: { mutate: any; data: any; isError: any; error: any } = usePostUser();

  let navigate = useNavigate();

  console.log(data);
  console.log(isError);
  console.log(error);

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={(values) => {
        mutate(values);
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
              <FormLabel forInput="name" text="Name" />
              <Field
                type="text"
                id="name"
                value={values.name}
                onChange={handleChange}
                className={tailwindClass.inputFieldClasses}
                placeholder="techverx"
              />
              <ErrorMessage name="name">
                {(msg) => {
                  return <FormErrorBanner msg={msg} />;
                }}
              </ErrorMessage>
            </div>
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
                title="User Created"
                body="Congratulation! A new user has been created!"
                isOpen={true}
                isError={false}
                action={() => navigate("/signin")}
              />
            ) : null}
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
