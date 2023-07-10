import React from "react";

import { useSelector } from "react-redux";

import { PostList, PostsWrapp } from "./styled";

import Post from "../../UI/Post";
import { RootState } from "../../redux/store";
import { IPost } from "../../redux/types";

type PostsProps = {
	posts: any[];
	$baseColumnCounter?: number | string;
	contentRef?: any;
}

const Posts: React.FC<PostsProps> = React.forwardRef(({ posts, $baseColumnCounter, contentRef }) => {
	const { authUser } = useSelector((state: RootState) => state.authUser);

	return (
		<PostsWrapp>
			<PostList style={{ marginBottom: -20 }} $baseColumnCounter={$baseColumnCounter} ref={contentRef}>
				{posts?.map((post: IPost) => {
					const isMyPost = authUser.user.id === post?.user.id;
					const isLikedByMe = isMyPost ?
						post.liked?.find(postUser => postUser.user.id === authUser.user.id)
						:
						authUser.liked.find((likedPost: IPost) => likedPost.id === post.id);
					const isSavedByMe = authUser.saved.find((savedPost: IPost) => savedPost.id === post.id);

					return (
						<Post
							as="li"
							key={post.id}
							post={post}
							isMyPost={isMyPost}
							isLikedByMe={isLikedByMe}
							isSavedByMe={isSavedByMe}
							userId={authUser.user.id}
							authUser={authUser}
						/>
					);
				})}
			</PostList>
		</PostsWrapp>
	);
});

export default Posts;
