import React, { useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useAudioRecorder } from "react-audio-voice-recorder";

import {
	AllChatButton,
	DirectBodyContent,
	DirectBottomBar,
	DirectContent,
	DirectWrapp,
	MicrophoneButton,
	MicrophoneButtonBlock,
	RecordingIcon,
	RecordingTimer,
	DirectVoiceWrapper,
	DirectVoicePreview,
	DirectSendButton,
} from "./styles";
import { Block, Row } from "../../UI/Layout";
import Text from "../../UI/Text";
import Input from "../../UI/Input";
import DefaultButton from "../../UI/DefaultButton";
import Avatar from "../../UI/Avatar";
import Icon from "../../UI/Icon";

import Container from "../Container";
import DirectSidebar from "./DirectSidebar";
import Header from "../Header";

import { useInput } from "../../hooks/useInput";
import { useTimer } from "../../hooks/useTimer";
import { useWindowResize } from "../../hooks/useWindowResize";

import { ADD_MESSAGE, SET_ACTIVE_CHAT } from "../../redux/direct/types";

import { RootState } from "../../redux/store";

import { VoiceMessage } from "../../containers/VoiceMessage/VoiceMessage";

import microphoneIcon from "../../assets/icons/micro.svg";
import recordingIcon from "../../assets/icons/audio-wave.gif";

import { fancyTimeFormat } from "../../helpers/normalizeTimer";
import { DirectMessage } from "./DirectMessage";
import Button from "../../UI/Button";

import closeIcon from "../../assets/icons/close.svg";

const Direct = () => {
	const { messages, activeChatIndex, activeChat } = useSelector(
		(state: RootState) => state.direct
	);
	const {
		authUser: { user },
	} = useSelector((state: RootState) => state.authUser);

	const [isGeneralChatActive, setIsGeneralChatActive] = useState(false);
	const [recordingUrl, setRecordingUrl] = useState(null);

	const { recordingBlob, startRecording, stopRecording, isRecording } =
		useAudioRecorder();

	const { seconds, startTimer, stopTimer, started } = useTimer({
		direction: "up",
	});

	const messagesBodyRef = useRef<any>(null);
	const recordingIconRef = useRef<any>(null);
	const recordingTimerRef = useRef<any>(null);

	const inputRef = useRef<any>(null);

	const voicePreviewBlockRef = useRef<any>(null);

	const isTabletWidth = useWindowResize() <= 768;

	useEffect(() => {
		document.body.style.overflow = "hidden";

		normalizeDirectContentBodyScroll();
	}, []);

	useEffect(() => {
		normalizeDirectContentBodyScroll();
	}, [messages, activeChat]);

	useEffect(() => {
		if (recordingBlob) {
			setRecordingUrl(URL.createObjectURL(recordingBlob));

			inputRef.current.placeholder = "You can optional add a comment";
			inputRef.current.focus();
		} else {
			setRecordingUrl(null);
		}
	}, [recordingBlob]);

	useEffect(() => {
		if (recordingTimerRef.current) {
			recordingTimerRef.current.innerText = fancyTimeFormat(seconds);
		}
	}, [seconds]);

	const sendInput = useInput({ initialValue: "" });

	const dispatch = useDispatch();

	const onChatItemClick = (id: number | string) => {
		const searchableChat = messages.find((chat) => chat.id === id);

		if (!searchableChat) return;

		dispatch({ type: SET_ACTIVE_CHAT, payload: searchableChat });

		if (isTabletWidth && isGeneralChatActive) setIsGeneralChatActive(false);
	};

	const handleSend = (text: string) => {
		if (!text && !recordingUrl) {
			inputRef.current.focus();
			return;
		}

		if (text && recordingUrl) {
			dispatch({
				type: ADD_MESSAGE,
				payload: {
					chatId: activeChat?.id,
					voiceUrl: URL.createObjectURL(recordingBlob),
					text,
				},
			});
			setRecordingUrl(null);
			sendInput.clearValue();

			inputRef.current.placeholder = "Your message";

			return;
		}

		if (text) {
			dispatch({
				type: ADD_MESSAGE,
				payload: { chatId: activeChat?.id, text },
			});

			sendInput.clearValue();

			return;
		}

		if (recordingUrl) {
			dispatch({
				type: ADD_MESSAGE,
				payload: {
					chatId: activeChat?.id,
					voiceUrl: URL.createObjectURL(recordingBlob),
				},
			});

			setRecordingUrl(null);
			inputRef.current.placeholder = "Your message";
			return;
		}
	};

	const sendInputOnKeyDown = (e: any) => {
		if (e.keyCode === 13) handleSend(sendInput?.value);
	};

	const handleVoiceMouseDown = (event: any) => {
		if (event.nativeEvent.which !== 1) return;

		startRecording();

		startTimer(0);
	};

	const handleVoiceMouseUp = (event: any) => {
		if (event.nativeEvent.which !== 1) return;

		stopRecording();

		stopTimer();
	};

	const handleCrossVoicePreviewComponent = () => {
		setRecordingUrl(null);

		inputRef.current.placeholder = "Your message";
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
							<Block as="ul" style={{ padding: 15, flex: 1 }}>
								{messages[activeChatIndex]?.data.map((message: any) => (
									<DirectMessage
										key={message.id}
										as="li"
										position={message.isMe}
										activeChat={activeChat}
										user={user}
										{...message}
									/>
								))}
							</Block>
							<DirectBottomBar>
								{recordingUrl && (
									<DirectVoicePreview>
										<DirectVoiceWrapper>
											<VoiceMessage
												url={
													recordingBlob && URL.createObjectURL(recordingBlob)
												}
												ref={voicePreviewBlockRef}
											/>
										</DirectVoiceWrapper>
										<Button onClick={handleCrossVoicePreviewComponent}>
											<Icon url={closeIcon} fill="black" />
										</Button>
									</DirectVoicePreview>
								)}
								<Row>
									<Input
										value={sendInput?.value}
										onChange={sendInput?.onChange}
										onKeyDown={sendInputOnKeyDown}
										placeholder="Your message"
										noError
										ref={inputRef}
										style={{ flex: 1 }}
									/>
									<MicrophoneButtonBlock>
										{isRecording && (
											<Row
												style={{
													flexDirection: "column",
													alignItems: "center",
													marginRight: 5,
												}}
											>
												<RecordingIcon
													src={recordingIcon}
													alt="recording icon"
													ref={recordingIconRef}
												/>
												<RecordingTimer ref={recordingTimerRef}>
													0:00
												</RecordingTimer>
											</Row>
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
									<DirectSendButton
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
