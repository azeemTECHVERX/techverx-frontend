// Libraries
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
// Hooks
import { usePostUser } from "../../hooks/usePostUser";
// Components
import FormErrorBanner from "../formErrorBanner/FormErrorBanner";
import FormLabel from "../formLabel/formLabel";
import Button from "../button/Button";
import FadeAnimator from "../animators/FadeAnimator";
import ErrorSnackbar from "../errorSnackbar/ErrorSnackbar";
// Utils
import { authFormValidator, ErrorObject } from "../../utils/formValidator";
import { tailwindClass } from "../../utils/tailwindClass";

const SignUpForm: React.FC = () => {
  const {
    mutate,
    data,
    isError,
    error,
  }: { mutate: any; data: any; isError: any; error: any } = usePostUser();

  let navigate = useNavigate();

  const toaster = () => {
    toast.success("User has been registed!", {
      id: "signuptoaster",
    });

    setTimeout(() => {
      navigate("/signin");
    }, 1000);
    return <React.Fragment />;
  };

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
              <FadeAnimator>
                <ErrorSnackbar errorMsg={error?.response?.data?.error} />
              </FadeAnimator>
            ) : null}
            <div className="hidden">{data?.data ? toaster() : null}</div>

            <Toaster />
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
