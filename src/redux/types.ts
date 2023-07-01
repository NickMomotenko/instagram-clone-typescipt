export type IPost = {
  id: number | string;
  postType: string;
  user: IPostUser;
  date: string;
  text: string;
  photo: string[];
  comments: IPostComment[];
  liked: IPostLike[];
};

export type IPostUser = {
  id: number | string;
  fullname: string;
  city?: string;
  country?: string;
  avatar?: string;
};

export type IPostComment = {
  id: number | string;
  user: {
    id: number | string;
    fullname: string;
    city?: string;
    avatar: string;
  };
  text: string;
};

export type IPostLike = {
  id: number | string;
  user: {
    id: number | string;
    fullname: string;
    city?: string;
    avatar: string;
  };
};
