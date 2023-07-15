import React, { useRef, useState } from "react";

import { useDispatch } from "react-redux";

import {
	PostChangeBtn,
	PostCommentsBottom,
	PostCommentsContent,
	PostCommentsWrapp,
	PostDeleteBtn,
	PostRow,
} from "./PostCommentsStyles";

import { useInput } from "../../hooks/useInput";

import { Block, Row } from "../Layout";
import Avatar from "../Avatar";
import Text from "../Text";

import Input from "../../UI/Input";
import DefaultButton from "../../UI/DefaultButton";

import {
	ADD_COMMENT,
	CHANGE_COMMENT,
	DELETE_COMMENT,
} from "../../redux/posts/types";
import { IPostComment } from "../../redux/types";
import Button from "../Button";

import changeIcon from "../../assets/icons/change.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import Icon from "../Icon";

type PostCommentsProps = {
	post?: any;
	isCommentsBarActive?: {
		isActive?: boolean;
		setIsActive?: any;
	};
	userId?: number | string;
	onClick?: () => void;
};

const PostComments: React.FC<PostCommentsProps> = ({
	post,
	isCommentsBarActive,
	userId,
	onClick,
}) => {
	const [isChangeComment, setIsChangeComment] = useState(false);
	const [currentComment, setCurrentComment] = useState<any>(null);

	const dispatch = useDispatch();

	const commentInputRef = useRef<any>(null);

	const commentInput = useInput({ initialValue: "" });

	const { comments } = post;

	const isEmpty = comments?.length === 0;
	const noCommentsText = "No comments.. Be first ;)";

	const addButtonText = isChangeComment ? "Change" : "Add";
	const bgcolorAddButton = isChangeComment && "#b4384c";

	const addComment = () => {
		if (!commentInput.value) {
			commentInputRef.current.focus();
			return;
		}

		dispatch({
			type: ADD_COMMENT,
			payload: { id: post.id, text: commentInput.value },
		});

		commentInput.clearValue();
	};

	const changeComment = (commentId: number) => {
		setIsChangeComment(true);

		const comment = post.comments.find(
			(comment: any) => comment.id === commentId
		);

		commentInput.setValue(comment?.text);
		setCurrentComment(comment);

		commentInputRef.current.focus();
	};

	const changeComment2 = () => {
		if (commentInput?.value === currentComment?.text) {
			commentInput.clearValue();
			setCurrentComment(null);
			setIsChangeComment(false);
			return;
		}

		dispatch({
			type: CHANGE_COMMENT,
			payload: {
				postId: post.id,
				commentId: currentComment?.id,
				text: commentInput.value,
			},
		});

		commentInput.clearValue();
		setCurrentComment(null);
		setIsChangeComment(false);
	};

	const deleteComment = (id: number | string) => {
		dispatch({
			type: DELETE_COMMENT,
			payload: {
				postId: post.id,
				commentId: id,
			},
		});

		if (currentComment || isChangeComment) {
			setCurrentComment(null);
			setIsChangeComment(false);
			commentInput.clearValue();
		}
	};

	const addButtonClickFunction = !isChangeComment ? addComment : changeComment2;

	return (
		<PostCommentsWrapp
			$active={isCommentsBarActive?.isActive}
			// onClick={onClick}
		>
			<PostCommentsContent as={isEmpty ? "div" : "ul"}>
				{isEmpty ? (
					<Text text={noCommentsText} $textColor="#fff" />
				) : (
					comments?.map((comment: IPostComment) => {
						const { id, user, text } = comment;

						const isMyComment = userId === user?.id;
						const searchableComment = id === currentComment?.id;
						const changeButtonText =
							searchableComment && isChangeComment ? "x" : "change";

						return (
							<PostRow key={id} as="li">
								<Block style={{ marginRight: 11 }}>
									<Avatar
										url={user?.avatar}
										fullname={user?.fullname}
										$textSize={11}
										size={20}
									/>
								</Block>
								<Block style={{ marginTop: -7, flex: 1 }}>
									<Row $btw $center>
										<Text
											text={user?.fullname}
											$textColor="#ffcdcd"
											as="a"
											href="/post"
										/>
										{isMyComment && (
											<Row $center style={{ marginLeft: "auto" }}>
												<Button view="ghost" onClick={() => changeComment(id)}>
													<PostChangeBtn>
														<Icon url={changeIcon} />
													</PostChangeBtn>
												</Button>
												<Button
													view="ghost"
													onClick={() => deleteComment(id)}
													fill="#fff"
												>
													<PostDeleteBtn>
														<Icon url={deleteIcon} />
													</PostDeleteBtn>
												</Button>
											</Row>
										)}
									</Row>
									<Text text={text} $textColor="#fff" />
								</Block>
							</PostRow>
						);
					})
				)}
			</PostCommentsContent>
			<PostCommentsBottom>
				<Row>
					<Input
						ref={commentInputRef}
						value={commentInput.value}
						onChange={commentInput.onChange}
						placeholder="Type comment"
						noError
					/>
					<DefaultButton
						text={addButtonText}
						$bgColor={bgcolorAddButton}
						onClick={addButtonClickFunction}
						style={{ marginLeft: 5, padding: "7px 15px" }}
					/>
				</Row>
			</PostCommentsBottom>
		</PostCommentsWrapp>
	);
};

export default PostComments;
