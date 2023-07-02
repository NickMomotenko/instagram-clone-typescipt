import React from "react";

import { useSelector } from "react-redux";

import { PostList, PostsWrapp } from "./styled";

import Post from "../../UI/Post";
import { RootState } from "../../redux/store";
import { IPost } from "../../redux/types";

const Posts = () => {
  const { authUser } = useSelector((state: RootState) => state.authUser);
  const { posts }: IPost[] | any = useSelector(
    (state: RootState) => state.posts
  );

  return (
    <PostsWrapp>
      <PostList style={{ marginBottom: -20 }}>
        {posts?.map((post: IPost) => {
          const isMyPost = authUser.user.id === post?.user.id;

          return (
            <Post
              as="li"
              key={post.id}
              post={post}
              isMyPost={isMyPost}
              userId={authUser.user.id}
              authUser={authUser}
            />
          );
        })}
      </PostList>
    </PostsWrapp>
  );
};

export default Posts;
