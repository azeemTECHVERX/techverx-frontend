import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const SignUpForm: React.FC = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={(values) => {
        console.log("Submitting");
        console.log(values);
      }}
      validate={(values) => {
        const errors: any = {};
        if (!values.email) {
          errors.email = "Email is Required!";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid Email Address";
        }
        if (!values.password) {
          errors.password = "Password is Required!";
        }
        if (values.password && values.password.length < 6) {
          errors.password = "Password is too Short";
        }
        if (!values.confirmPassword) {
          errors.confirmPassword = "Password is Required!";
        }
        if (values.password !== values.confirmPassword) {
          errors.confirmPassword = "Password is is not matched";
        }
        return errors;
      }}
    >
      {({ handleChange, values }) => {
        return (
          <Form>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <Field
                type="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="sample@techverx.com"
              />
              <ErrorMessage name="email">
                {(msg) => {
                  return (
                    <div
                      className="bg-slate-300 mt-2 border-l-4 border-red-500 text-red-600 p-2"
                      role="alert"
                    >
                      <p className="text-sm">{msg}</p>
                    </div>
                  );
                }}
              </ErrorMessage>
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <Field
                type="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                placeholder="*******"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              <ErrorMessage name="password">
                {(msg) => {
                  return (
                    <div
                      className="bg-slate-300 mt-2 border-l-4 border-red-500 text-red-600 p-2"
                      role="alert"
                    >
                      <p className="text-sm">{msg}</p>
                    </div>
                  );
                }}
              </ErrorMessage>
            </div>
            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Confirm Password
              </label>
              <Field
                type="password"
                id="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                placeholder="*******"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              <ErrorMessage name="confirmPassword">
                {(msg) => {
                  return (
                    <div
                      className="bg-slate-300 mt-2 border-l-4 border-red-500 text-red-600 p-2"
                      role="alert"
                    >
                      <p className="text-sm">{msg}</p>
                    </div>
                  );
                }}
              </ErrorMessage>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none hover:scale-105 transition-all focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Sign In
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
