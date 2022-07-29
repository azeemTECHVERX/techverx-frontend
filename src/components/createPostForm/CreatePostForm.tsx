// Libraries
import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-hot-toast";
// Components
import FormLabel from "../formLabel/formLabel";
import FormErrorBanner from "../formErrorBanner/FormErrorBanner";
import Button from "../button/Button";
import SpringAnimator from "../animators/SpringAnimator";
// Context
import UserContext from "../../context/UserContext";
// Hooks
import { useCreatePost } from "../../hooks/useCreatePost";
// Utils
import { queryClient } from "../..";
import { tailwindClass } from "../../utils/tailwindClass";
import {
  PostFormErrorObject,
  postFormValidator,
} from "../../utils/formValidator";

const CreatePostForm: React.FC<any> = ({ closeModal }) => {
  const userContext = useContext(UserContext);
  const { mutateAsync } = useCreatePost();

  const postSubmit = (values: any) => {
    const id = userContext?.user?._id;
    values.id = id;
    mutateAsync(values)
      .then(() => {
        toast.success("Post Has been created!", {
          duration: 1000,
          id: "createPostToaster",
        });
        queryClient.invalidateQueries(["posts"]);
        closeModal(false);
      })
      .catch(() => {
        toast.error("Error while creating post", {
          duration: 1000,
          id: "createPostErrorToaster",
        });
      });
  };
  return (
    <Formik
      initialValues={{
        title: "",
        text: "",
      }}
      onSubmit={(values) => {
        postSubmit(values);
      }}
      validate={(values) => {
        const errors: PostFormErrorObject = postFormValidator(values);
        return errors;
      }}
    >
      {({ handleChange, values }) => {
        return (
          <SpringAnimator>
            <div className="p-10 relative z-20">
              <div className=" px-20 py-10 bg-slate-300  opacity-80 rounded-2xl">
                <h1 className="text-3xl mb-4">Create a Post</h1>

                <Form>
                  <div className="mb-6">
                    <FormLabel forInput="title" text="Post Title" />
                    <Field
                      type="text"
                      id="title"
                      value={values.title}
                      onChange={handleChange}
                      className={tailwindClass.inputFieldClasses}
                      placeholder="Title of the Post"
                    />
                    <ErrorMessage name="title">
                      {(msg) => {
                        return <FormErrorBanner msg={msg} />;
                      }}
                    </ErrorMessage>
                  </div>
                  <div className="mb-6">
                    <FormLabel forInput="text" text="Post Content" />
                    <Field
                      type="text"
                      id="text"
                      value={values.text}
                      onChange={handleChange}
                      placeholder="Content of the Post"
                      className={tailwindClass.inputFieldClasses}
                    />
                    <ErrorMessage name="password">
                      {(msg) => {
                        return <FormErrorBanner msg={msg} />;
                      }}
                    </ErrorMessage>
                  </div>
                  <div className="flex justify-center">
                    <Button type="submit" text="Add Post" />
                  </div>
                </Form>
              </div>
            </div>
          </SpringAnimator>
        );
      }}
    </Formik>
  );
};

export default CreatePostForm;
