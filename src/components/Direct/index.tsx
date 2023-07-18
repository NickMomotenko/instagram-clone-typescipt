import React, { useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
	AllChatButton,
	DirectBodyContent,
	DirectBottomBar,
	DirectContent,
	DirectMessage,
	DirectMessageText,
	DirectWrapp,
	MicrophoneButton,
	MicrophoneButtonBlock,
	RecordingIcon,
} from "./styles";

import { Block, Row } from "../../UI/Layout";
import Text from "../../UI/Text";
import Input from "../../UI/Input";
import DefaultButton from "../../UI/DefaultButton";

import Container from "../Container";
import Header from "../Header";

import { useInput } from "../../hooks/useInput";

import { ADD_MESSAGE, SET_ACTIVE_CHAT } from "../../redux/direct/types";
import { useWindowResize } from "../../hooks/useWindowResize";
import DirectSidebar from "./DirectSidebar";
import Avatar from "../../UI/Avatar";
import { RootState } from "../../redux/store";
import { VoiceMessage } from "../../containers/VoiceMessage/VoiceMessage";
import Button from "../../UI/Button";
import Icon from "../../UI/Icon";

import microphoneIcon from "../../assets/icons/micro.svg";
import recordingIcon from "../../assets/icons/audio-wave.gif";
import { useAudioRecorder } from "react-audio-voice-recorder";

const Direct = () => {
	const { messages, activeChatIndex, activeChat } = useSelector(
		(state: RootState) => state.direct
	);
	const {
		authUser: { user },
	} = useSelector((state: RootState) => state.authUser);

	const [isGeneralChatActive, setIsGeneralChatActive] = useState(false);

	const { recordingBlob, startRecording, stopRecording, isRecording } =
		useAudioRecorder();

	const messagesBodyRef = useRef<any>(null);
	const recordingIconRef = useRef<any>(null);

	const isTabletWidth = useWindowResize() <= 768;

	useEffect(() => {
		document.body.style.overflow = "hidden";

		normalizeDirectContentBodyScroll();
	}, []);

	useEffect(() => {
		normalizeDirectContentBodyScroll();
	}, [messages, activeChat]);

	/*useEffect(() => {
		if (isRecording) {
			recordingIconRef.current.style.visibility = "visible";
		} else {
			recordingIconRef.current.style.visibility = "hidden";
		}
	}, [isRecording]);*/

	useEffect(() => {
		if (recordingBlob) {
			dispatch({
				type: ADD_MESSAGE,
				payload: {
					chatId: activeChat?.id,
					voiceUrl: URL.createObjectURL(recordingBlob),
				},
			});
		}
	}, [recordingBlob]);

	const sendInput = useInput({ initialValue: "" });

	const dispatch = useDispatch();

	const onChatItemClick = (id: number | string) => {
		const searchableChat = messages.find((chat) => chat.id === id);
		if (!searchableChat) return;
		dispatch({ type: SET_ACTIVE_CHAT, payload: searchableChat });
		if (isTabletWidth && isGeneralChatActive) setIsGeneralChatActive(false);
	};

	const handleSend = (text: string) => {
		if (!text) return;
		dispatch({ type: ADD_MESSAGE, payload: { chatId: activeChat?.id, text } });
		sendInput.clearValue();
	};

	const sendInputOnKeyDown = (e: any) => {
		if (e.keyCode === 13) {
			handleSend(sendInput?.value);
		}
	};

	const handleVoiceMouseDown = () => {
		console.log("зажата");
		startRecording();
	};

	const handleVoiceMouseUp = () => {
		stopRecording();
	};

	function normalizeDirectContentBodyScroll() {
		messagesBodyRef?.current.scrollTo(
			0,
			messagesBodyRef?.current?.scrollHeight
		);
	}

	return (
		<DirectWrapp>
			<Header />
			<Container style={{ width: 1000 }}>
				<DirectContent>
					<Row $center $btw style={{ marginBottom: 25 }}>
						<Text text="Chats" $bold style={{ fontSize: 25 }} />
						<AllChatButton
							text="All chats"
							onClick={() => setIsGeneralChatActive(!isGeneralChatActive)}
						/>
					</Row>
					<Row style={{ width: "100%", position: "relative" }}>
						<DirectSidebar
							messages={messages}
							activeChat={activeChat}
							onChatItemClick={onChatItemClick}
							setIsGeneralChatActive={setIsGeneralChatActive}
							isGeneralChatActive={isGeneralChatActive}
						/>
						<DirectBodyContent
							ref={messagesBodyRef}
							$isGeneralChatActive={isGeneralChatActive}
						>
							<Block as="ul" style={{ padding: 15 }}>
								{messages[activeChatIndex]?.data.map(
									({ id, text, time, isMe, type, url }: any) => (
										<DirectMessage key={id} as="li" position={isMe}>
											<Block
												style={{
													marginRight: isMe === false && 15,
													marginLeft: isMe ? 15 : 0,
												}}
											>
												<Avatar
													url={isMe ? user?.avatar : activeChat?.user?.avatar}
													fullname={
														isMe ? user?.fullname : activeChat?.user?.fullname
													}
													size={40}
												/>
											</Block>
											{type === "voice" ? (
												<VoiceMessage url={url} />
											) : (
												<DirectMessageText $isMe={isMe}>
													<Text text={text} color="#fff" />
													<Text
														text={time}
														style={{ fontSize: 11, alignSelf: "flex-end" }}
														color="#fff"
													/>
												</DirectMessageText>
											)}
										</DirectMessage>
									)
								)}
							</Block>
							<DirectBottomBar>
								<Row>
									<Input
										value={sendInput?.value}
										onChange={sendInput?.onChange}
										onKeyDown={sendInputOnKeyDown}
										placeholder="Your message"
										noError
										style={{ flex: 1 }}
									/>
									<MicrophoneButtonBlock>
										{isRecording && (
											<RecordingIcon
												src={recordingIcon}
												alt="recording icon"
												ref={recordingIconRef}
											/>
										)}
										<MicrophoneButton
											view="ghost"
											onMouseUp={handleVoiceMouseUp}
											onMouseDown={handleVoiceMouseDown}
											$isRecording={isRecording}
										>
											<Icon url={microphoneIcon} />
										</MicrophoneButton>
									</MicrophoneButtonBlock>
									<DefaultButton
										text="Send"
										onClick={() => handleSend(sendInput?.value)}
										style={{ marginLeft: 21 }}
									/>
								</Row>
							</DirectBottomBar>
						</DirectBodyContent>
					</Row>
				</DirectContent>
			</Container>
		</DirectWrapp>
	);
};

export default Direct;
