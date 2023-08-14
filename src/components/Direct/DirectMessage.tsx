import React, { useEffect, useRef, useState } from "react";
import { Block } from "../../UI/Layout";
import Avatar from "../../UI/Avatar";
import { VoiceMessage } from "../../containers/VoiceMessage/VoiceMessage";
import { DirectMessageText, DirectMessageWrapp } from "./styles";
import Text from "../../UI/Text";
import { ContextMenu } from "../../UI/ContextMenu";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { DELETE_MESSAGE } from "../../redux/direct/types";

type DirectMessageProps = {
	id: number | string;
	position?: boolean;
	isMe?: boolean;
	activeChat: any;
	type: string;
	text: string;
	time: string;
	user?: any;
	url?: string;
	as?: string;
};

export const DirectMessage: React.FC<DirectMessageProps> = ({
	id,
	position,
	isMe,
	activeChat,
	type,
	text,
	time,
	user,
	url,
	as,
	...rest
}) => {
	const [isContextMenuActive, setIsContextMenuActive] = useState(false);

	const contextMenuRef = useRef<any>(null);

	const dispatch = useDispatch<AppDispatch>();

	const withVoice = type === "voice";

	useEffect(() => {
		if (isContextMenuActive) {
			if (contextMenuRef.current) {
				contextMenuRef.current.style = `top:0; right:0`;
			}
		}
	}, [isContextMenuActive]);

	const contextMenuOptions = [
		{
			title: "Change",
			func: () => {},
		},
		{
			title: "Delete",
			func: () => {
				dispatch({
					type: DELETE_MESSAGE,
					payload: {
						chatId: activeChat?.id,
						messageId: id,
					},
				});
			},
		},
	];
	const handleClickOption = (e: any, isMe: boolean | undefined) => {
		e.preventDefault();

		if (!isMe) return;

		setIsContextMenuActive(true);
	};

	useClickOutside(contextMenuRef, () => setIsContextMenuActive(false));

	return (
		<DirectMessageWrapp position={position} as={as}>
			<Block
				style={{
					marginRight: !isMe && 15,
					marginLeft: isMe ? 15 : 0,
				}}
			>
				<Avatar
					url={isMe ? user?.avatar : activeChat?.user?.avatar}
					fullname={isMe ? user?.fullname : activeChat?.user?.fullname}
					size={40}
				/>
			</Block>
			<DirectMessageText
				$isMe={isMe}
				onContextMenu={(e: any) => handleClickOption(e, isMe)}
			>
				{withVoice && <VoiceMessage url={url} />}
				<Text
					text={text}
					$textColor="#fff"
					style={{ margin: withVoice && "10px 0", fontSize: 16 }}
				/>
				<Text
					text={time}
					style={{ fontSize: 10, alignSelf: "flex-end" }}
					$textColor="#fff"
				/>
				{isContextMenuActive && (
					<ContextMenu list={contextMenuOptions} ref={contextMenuRef} />
				)}
			</DirectMessageText>
		</DirectMessageWrapp>
	);
};
