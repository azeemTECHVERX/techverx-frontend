import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FormLabel from "../formLabel/formLabel";
import { tailwindClass } from "../../utils/tailwindClass";
import FormErrorBanner from "../formErrorBanner/FormErrorBanner";
import Button from "../button/Button";
import { useCreateComment } from "../../hooks/useCreateComment";
import { queryClient } from "../..";
import toast from "react-hot-toast";

interface CreateCommentProps {
  id: string;
}

const CreateComment: React.FC<CreateCommentProps> = ({ id }) => {
  const { mutateAsync } = useCreateComment();

  const createComment = (values: any) => {
    values.id = id;
    mutateAsync(values)
      .then(() => {
        queryClient.invalidateQueries(["posts"]);
        toast.success("Comment has been created!", {
          duration: 2000,
          id: "createCommentToaster",
        });
      })
      .catch(() =>
        toast.error("Couldn't post comment!", {
          duration: 2000,
          id: "commentErrorToast",
        })
      );
  };

  return (
    <Formik
      initialValues={{
        text: "",
      }}
      onSubmit={(values) => {
        createComment(values);
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
