import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { PostList, PostsWrapp } from "./styled";
import { RootState } from "../../redux/store";
import Post from "../../UI/Post";
import { IPost } from "../../redux/types";
import { Skeleton } from "../Skeleton/Skeleton";

type PostsProps = {
	posts: IPost[];
	$baseColumnCounter?: number | string;
	contentRef?: any;
};

const Posts: React.FC<PostsProps> = React.forwardRef(
	({ posts, $baseColumnCounter, contentRef }) => {
		const { authUser } = useSelector((state: RootState) => state.authUser);

		const [renderedPosts, setRenderedPosts] = useState([]);

		useEffect(() => {
			setTimeout(() => {
				setRenderedPosts(posts);
			}, 1500);
		}, []);

		return (
			<PostsWrapp>
				<PostList
					style={{ marginBottom: -20 }}
					$baseColumnCounter={$baseColumnCounter}
					ref={contentRef}
				>
					{renderedPosts.length
						? renderedPosts?.map((post: IPost) => {
								const isMyPost = authUser.user.id === post?.user.id;
								const isLikedByMe = isMyPost
									? post.liked?.find(
											(postUser) => postUser.user.id === authUser.user.id
									  )
									: authUser.liked.find(
											(likedPost: IPost) => likedPost.id === post.id
									  );
								const isSavedByMe = authUser.saved.find(
									(savedPost: IPost) => savedPost.id === post.id
								);

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
						  })
						: [...new Array(5)].map((_, index: number) => (
								<Skeleton
									key={index}
									itemTag="li"
									style={{ borderColor: "red" }}
								/>
						  ))}
				</PostList>
			</PostsWrapp>
		);
	}
);

export default Posts;
