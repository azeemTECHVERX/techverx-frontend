import toast from "react-hot-toast";
import { queryClient } from "../..";
import { PostInterface } from "../../components/Post/interface";

export const deleteComment = async (
  mutateAsync: any,
  postId: string,
  id: string
) => {
  try {
    const response = await mutateAsync({ id, postId });
    if (response.data) {
      queryClient.invalidateQueries(["posts"]);
      toast.success("Comment has been removed.", {
        duration: 2000,
        id: "deleteCommentSuccess",
      });
    }
  } catch (error) {
    toast.error("An Error occured while removing comment", {
      duration: 2000,
      id: "deleteCommentError",
    });
  }
};

export const createComment = async (
  mutateAsync: any,
  values: any,
  id: string
) => {
  try {
    values.id = id;
    const response = await mutateAsync(values);
    values.text = "";
    if (response.data) {
      queryClient.invalidateQueries(["posts"]);
      toast.success("Comment has been created!", {
        duration: 2000,
        id: "createCommentToaster",
      });
    }
  } catch (error) {
    console.log(error);
    toast.error("An Error Occured while posting this comment!", {
      duration: 2000,
      id: "CommentErrorToast",
    });
  }
};

export const isLiked = (post: PostInterface, userId: string | undefined) => {
  let liked = post.likes.filter((like) => like._id === userId);
  if (liked.length) {
    return true;
  }
  return false;
};

export const deletePost = async (mutateDeleteObject: any, id: string) => {
  try {
    const response = await mutateDeleteObject.mutateAsync(id);
    if (response.data) {
      toast.success("Post Has Been Deleted.", {
        id: "postdeletetoaster",
      });
      queryClient.invalidateQueries(["posts"]);
    }
  } catch (error) {
    console.error(error);
    toast.error("There is Some error while deleting the post", {
      id: "postDeleteErrorToaster",
    });
  }
};

export const toggleLike = async (mutateLikeObject: any, id: string) => {
  try {
    const response = await mutateLikeObject.mutateAsync(id);
    if (response.data) {
      toast.success(`Post has been ${response.data.status}`, {
        duration: 1000,
        id: "postLikeUnlikeToaster",
      });
      queryClient.invalidateQueries(["posts"]);
    }
  } catch (error) {
    console.error(error);
    toast.error(`Something Bad happened!`, {
      duration: 1000,
      id: "postLikeUnlikeErrorToaster",
    });
  }
};
