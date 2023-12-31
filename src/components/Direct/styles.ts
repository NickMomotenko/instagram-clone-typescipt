import styled, { css, keyframes } from "styled-components";
import DefaultButton from "../../UI/DefaultButton";

import { Block, Row } from "../../UI/Layout";
import { ButtonWrapp } from "../../UI/Button/styled";

export const DirectWrapp = styled.div`
	height: 100%;
	width: 100%;
`;

export const DirectContent = styled.div`
	@media screen and (max-width: 768px) {
		padding: 0 3%;
	}
`;

export const DirectContentBlockStyles = styled.div`
	background: #ffffff;
	border: 1px solid #f0f6fd;
	box-shadow: 0px 10px 40px rgb(222 230 237 / 40%);
	border-radius: 30px;
	padding: 15px;
	max-width: 280px;
	min-width: 280px;
	margin-right: 20px;

	height: 100%;

	min-height: 40vh;

	max-height: 80vh;
	overflow-y: auto;
`;

export const DirectContentSidebar = styled(DirectContentBlockStyles)<{
	$isGeneralChatActive?: boolean;
}>`
	@media screen and (max-width: 768px) {
		position: absolute;
		top: 0;
		right: -100%;

		z-index: 5;
		margin-right: 0;
		box-shadow: -20px 0 10px #f4f4f4;

		max-width: 100%;
		width: 100%;
		min-width: auto;

		visibility: hidden;

		transition: right 0.5s;

		${({ $isGeneralChatActive }) =>
			$isGeneralChatActive &&
			css`
				right: 0;
				visibility: visible;
			`}
	}
`;

export const DirectSidebarList = styled.ul``;

export const DirectSidebarItem = styled.li<{ $isActiveChat?: boolean }>`
	display: flex;
	margin-bottom: 5px;
	cursor: pointer;
	background: ${({ $isActiveChat }) =>
		$isActiveChat ? "#d8d8ff" : "transparent"};
	padding: 14px;
	border-radius: 30px;

	&:last-child {
		margin-bottom: 0;
	}
`;

export const DirectMessageWrapp = styled.div<{ position?: boolean }>`
	margin-bottom: 15px;
	display: flex;

	${({ position }) =>
		position
			? css`
					justify-content: flex-start;
					flex-direction: row-reverse;
			  `
			: ""}
	&:last-child {
		margin-bottom: 0;
	}
`;

export const DirectMessageText = styled.div<{
	$isMe?: boolean;
	withVoice?: boolean;
}>`
	max-width: 300px;
	min-width: 300px;
	background-color: #a897f7;
	padding: 10px;
	border-radius: 0 10px 10px 10px;

	display: flex;
	flex-direction: column;

	color: #fff;
	position: relative;

	${({ $isMe }) =>
		$isMe &&
		css`
			border-radius: 10px 0 10px 10px;
			text-align: right;
			background-color: #afb1e2;
		`};

	@media screen and (max-width: 480px) {
		min-width: auto;

		width: ${({ withVoice }) => withVoice && "100%"};
	}
`;

export const DirectBottomBar = styled(Block)`
	margin-top: 20px;

	position: sticky;
	bottom: 0;
	z-index: 2;

	background: #fff;
	padding: 15px;
`;

export const DirectBodyContent = styled(DirectContentBlockStyles)<{
	$isGeneralChatActive?: boolean;
}>`
	max-width: 100%;
	flex: 1;
	margin-right: 0;
	max-height: 80vh;
	overflow-y: auto;
	padding: 0;
	padding-right: 10px;
	min-height: auto;

	height: 80vh;

	display: flex;
	flex-direction: column;

	@media screen and (max-width: 768px) {
		transition: opacity 0.5s;

		${({ $isGeneralChatActive }) =>
			$isGeneralChatActive &&
			css`
				opacity: 0.4;
			`}
	}
`;

export const AllChatButton = styled(DefaultButton)`
	background: transparent;
	color: rgba(119, 81, 81, 0.54);
	border-color: rgba(119, 81, 81, 0.54);

	@media screen and (min-width: 768px) {
		display: none;
	}
`;

export const MicrophoneButtonBlock = styled.div`
	display: inline-flex;
	align-items: center;
	margin-left: 10px;
`;

const pulse = keyframes`
  from {
    box-shadow: 0 0 10px blue;
  }

  to {
    box-shadow: 0 0 20px blue;
  }
`;

export const MicrophoneButton = styled(ButtonWrapp)<{ $isRecording?: boolean }>`
	margin-left: 3px;
	border-radius: 50%;
	padding: 2px 3px;
	box-shadow: ${({ $isRecording }) => $isRecording && "0 0 10px blue"};
	animation: 1s linear infinite;
	animation-name: ${({ $isRecording }) => $isRecording && "pulse"};

	svg {
		height: 25px;
		width: 25px;
	}
`;

export const RecordingIcon = styled.img`
	display: inline-block;
	height: 20px;
	width: 20px;
`;

export const RecordingTimer = styled.div`
	font-size: 11px;
`;

export const DirectVoiceWrapper = styled.div`
	max-width: 300px;
	width: 100%;
	margin-right: 15px;
`;

export const DirectVoicePreview = styled(Row)`
	margin-bottom: 10px;

	transition: opacity 0.3s;
`;

export const DirectSendButton = styled(DefaultButton)`
	background: #ff7e92;

	@media screen and (max-width: 480px) {
		padding: 7px 12px;
		margin-left: 10px !important;
	}
`;
