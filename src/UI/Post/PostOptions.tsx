import React, { useRef, useState } from "react";

import {
	PostOptionsBtnBack,
	PostOptionsContent,
	PostOptionsItem,
	PostOptionsLink,
	PostOptionsList,
	PostOptionsWrapp,
} from "./PostOptionsStyles";

import { useClickOutside } from "../../hooks/useClickOutside";
import { PostShareTo } from "./PostShareTo";
import { PostReport } from "./PostReport";
import Button from "../Button";

import backIcon from "../../assets/icons/back.svg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { UPDATE_USER } from "../../redux/user/types";

type PostOptionsProps = {
	options?: { id: number; title: string; onClick: () => void }[];
	active?: boolean;
	closeOptionBar?: () => void;
	isMyPost?: boolean;
	postId?: number | string;
};

const PostOptions: React.FC<PostOptionsProps> = ({
																									 active,
																									 closeOptionBar,
																									 isMyPost,
																									 postId,
																								 }) => {
	const [currentOption, setCurrentOption] = useState<string | null>(null);

	const { authUser } = useSelector((state: RootState) => state.authUser);

	const postOptionsRef = useRef<any>(null);

	const dispatch = useDispatch<AppDispatch>();

	const getOptionComponent = () => {
		switch (currentOption) {
			case "share":
				return <PostShareTo />;

			case "report":
				return <PostReport />;
		}
	};

	const baseOptions = [
		{
			title: "Report",
			label: "report",
			func: () => setCurrentOption("report"),
		},
		{
			title: "Share to",
			label: "share",
			func: () => setCurrentOption("share"),
		},
		{
			title: "Copy link",
			label: "copy",
			func: () => setCurrentOption(null),
		},

	];

	const cancelOption = {
		title: "Cancel",
		label: "cancel",
		func: () => closeOptionBar && closeOptionBar(),
	};

	const deleteOption = {
		title: "Delete", label: "delete", func: (id: number | string) => handleDeletePost(id),
	};

	const postOptionsWithPersonalFunctions = [
		...baseOptions, { ...deleteOption }, cancelOption,
	];

	const optionsList = isMyPost ? postOptionsWithPersonalFunctions : [...baseOptions, { ...cancelOption }];

	const handleDeletePost = () => {
		const updatedUserData = { ...authUser, posts: [...authUser.posts.filter((post: any) => post.id !== postId)] };

		dispatch({
			type: UPDATE_USER, updatedUserData,
		});

		closeOptionBar && closeOptionBar();
	};

	useClickOutside(postOptionsRef, () => closeOptionBar && closeOptionBar());

	return (
		<PostOptionsWrapp $active={active} ref={postOptionsRef}>
			{currentOption ? (
				<PostOptionsContent>{getOptionComponent()}</PostOptionsContent>
			) : (
				<PostOptionsList as="ul">
					{optionsList?.map(({ title, label, func }: any, index: number) => (
						<PostOptionsItem key={index} as="li">
							<PostOptionsLink
								as="button"
								onClick={() => {
									func && func();
								}}
							>
								{title}
							</PostOptionsLink>
						</PostOptionsItem>
					))}
				</PostOptionsList>
			)}
			{currentOption && (
				<PostOptionsBtnBack>
					<Button
						view="ghost"
						icon={backIcon}
						fill="#fff"
						onClick={() => setCurrentOption(null)}
					/>
				</PostOptionsBtnBack>
			)}
		</PostOptionsWrapp>
	);
};

export default PostOptions;
