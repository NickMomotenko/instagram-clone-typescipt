import { authUser, posts as postsData } from "../mockData";
import { IPost } from "../types";

import {
	ADD_COMMENT,
	CHANGE_COMMENT,
	CREATE_POST,
	DELETE_COMMENT,
	DELETE_POST,
	DISLIKE_POST,
	LIKE_POST,
	SAVE_POST,
	UPDATE_GLOBAL_POST,
} from "./types";

export const initialState = { posts: [...authUser.posts, ...postsData] };

export const postsReducer = (state = initialState, action: any) => {
	const { posts } = state;

	switch (action.type) {
		case UPDATE_GLOBAL_POST: {
			const { data } = action.payload;

			return { ...state, posts: [...data] };
		}

		case LIKE_POST: {
			const { id } = action;

			const searchablePost: IPost | any = posts.find((post) => post.id === id);

			if (!searchablePost) return state;

			const searchablePostIndex: number = posts.indexOf(searchablePost);

			const updatedPost = {
				...searchablePost,
				liked: [
					...searchablePost?.liked,
					{
						id: Date.now().toString(),
						user: authUser?.user,
					},
				],
			};

			const updatedData = [...posts];

			updatedData.splice(searchablePostIndex, 1, updatedPost);

			return { ...state, posts: [...updatedData] };
		}

		case DISLIKE_POST: {
			const { id } = action;

			const searchablePost: IPost | any = posts.find((post) => post.id === id);

			if (!searchablePost) return state;

			const searchablePostIndex = posts.indexOf(searchablePost);

			const searchablePostLikedData = searchablePost?.liked;

			const searchablePostUpdatedLikesData = searchablePostLikedData?.filter(
				(likeObj: any) => likeObj.user.id !== authUser.user.id,
			);

			const updatedPost = {
				...searchablePost,
				liked: [...searchablePostUpdatedLikesData],
			};

			const updatedData = [...posts];

			updatedData.splice(searchablePostIndex, 1, updatedPost);

			return { ...state, posts: [...updatedData] };
		}

		case SAVE_POST: {
			return state;
		}

		case CREATE_POST: {
			const { text, data } = action.payload;

			const basePostExample = {
				id: Date.now().toString(),
				postType: "text",
				photo: data,
				comments: [],
				liked: [],
			};

			const updatedData = [
				{
					...basePostExample,
					user: authUser.user,
					// date: `${weekName} , ${dayNumber} ${monthName} ${year}`,
					date: `Sunday , 25 January 2022`,
					text,
				},
				...posts,
			];

			return { ...state, posts: [...updatedData] };
		}

		case DELETE_POST : {

		}

		case ADD_COMMENT: {
			const { id: postId, text } = action.payload;

			const searchablePost: IPost | any = posts.find(
				(post: IPost | any) => post.id === postId,
			);
			const searchablePostIndex = posts.indexOf(searchablePost);

			const searchablePostComments = searchablePost.comments;

			const updatedPost = {
				...searchablePost,
				comments: [
					...searchablePostComments,
					{ id: Date.now().toString(), user: authUser.user, text },
				],
			};

			const updatedData = [...posts];

			updatedData.splice(searchablePostIndex, 1, updatedPost);

			return { ...state, posts: [...updatedData] };
		}

		case DELETE_COMMENT: {
			const { postId, commentId } = action.payload;

			const searchablePost: IPost | any = posts.find(
				(post: IPost | any) => post.id === postId,
			);
			const searchablePostIndex = posts.indexOf(searchablePost);

			const updatedComments = [
				...searchablePost.comments.filter(
					(comment: any) => comment.id !== commentId,
				),
			];

			const updatedPost = {
				...searchablePost,
				comments: [...updatedComments],
			};

			const updatedData = [...posts];

			updatedData.splice(searchablePostIndex, 1, updatedPost);

			return { ...state, posts: [...updatedData] };
		}

		case CHANGE_COMMENT: {
			const { postId, commentId, text } = action.payload;

			const searchablePost: IPost | any = posts.find(
				(post: IPost | any) => post.id === postId,
			);
			const searchablePostIndex = posts.indexOf(searchablePost);

			const comments = [
				...searchablePost?.comments.map((comment: any) => {
					if (comment.id === commentId) {
						return { ...comment, text };
					}

					return comment;
				}),
			];

			const updatedPost = {
				...searchablePost,
				comments: [...comments],
			};

			const updatedData = [...posts];

			updatedData.splice(searchablePostIndex, 1, updatedPost);

			return { ...state, posts: [...updatedData] };
		}

		default:
			return state;
	}
};
