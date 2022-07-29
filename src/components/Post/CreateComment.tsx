// Libraries
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
// Components
import FormErrorBanner from "../formErrorBanner/FormErrorBanner";
import Button from "../button/Button";
// Hooks
import { useCreateComment } from "../../hooks/useCreateComment";
// Utils
import { createComment } from "../../utils/postHelpers/postHelpers";

interface CreateCommentProps {
  id: string;
}

const CreateComment: React.FC<CreateCommentProps> = ({ id }) => {
  const { mutateAsync } = useCreateComment();

  return (
    <Formik
      initialValues={{
        text: "",
      }}
      onSubmit={(values) => {
        createComment(mutateAsync, values, id);
      }}
    >
      {({ values, handleChange }) => {
        return (
          <Form>
            <div className="mb-6 flex mt-3 space-x-4">
              <Field
                type="text"
                id="text"
                value={values.text}
                onChange={handleChange}
                className="bg-slate-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Title of the Comment"
              />
              <ErrorMessage name="title">
                {(msg) => {
                  return <FormErrorBanner msg={msg} />;
                }}
              </ErrorMessage>
              <Button text="Comment" type="submit" />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CreateComment;
