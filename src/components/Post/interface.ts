export interface PostByAndLike {
  _id: string;
  name: string;
}

export interface PostInterface {
  _id: string;
  postBy: PostByAndLike;
  text: string;
  title: string;
  likes: PostByAndLike[] | [];
  comments: CommentInterface[] | [];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface CommentInterface {
  _id: string;
  date: Date;
  text: string;
  user: PostByAndLike;
}

export interface PostCardProps {
  posts: PostInterface[];
}
