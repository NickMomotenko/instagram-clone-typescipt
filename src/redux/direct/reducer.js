import { messagesDb } from "../../context/mockData";

import {
	ADD_MESSAGE,
	DELETE_MESSAGE,
	CHANGE_MESSAGE,
	SET_ACTIVE_CHAT,
} from "./types";

const initialState = {
	messages: messagesDb,
	activeChatIndex: 0,
	activeChat: messagesDb[0],
};

export const directReducer = (state = initialState, action) => {
	const { messages } = state;

	switch (action.type) {
		case ADD_MESSAGE: {
			const { chatId, text, voiceUrl } = action.payload;

			const searchableChat = messages.find((chat) => chat.id === chatId);
			const searchablePostIndex = messages.indexOf(searchableChat);

			if (!searchableChat) return;

			const dateNow = new Date();

			let newMessage = {
				id: Date.now().toString(),
				isMe: true,
				date: `${dateNow.getDate()}.${
					dateNow.getMonth() + 1
				}.${dateNow.getFullYear()}`,
				time: `${dateNow.getHours()}:${dateNow.getMinutes()}`,
			};

			if (text) {
				newMessage = { ...newMessage, text };
			}

			if (voiceUrl) {
				newMessage = { ...newMessage, type: "voice", url: voiceUrl };
			}

			const updatedChatItem = {
				...searchableChat,
				data: [...searchableChat.data, newMessage],
			};

			const updatedData = [...messages];

			updatedData.splice(searchablePostIndex, 1, updatedChatItem);

			return { ...state, messages: [...updatedData] };
		}

		case DELETE_MESSAGE: {
			const { chatId, messageId } = action.payload;

			const searchableChat = messages.find((chat) => chat.id === chatId);
			const searchableMessageIndex = messages.indexOf(searchableChat);

			if (!searchableChat) return state;

			const updatedChatItem = {
				...searchableChat,
				data: [...searchableChat.data.filter((mess) => mess.id !== messageId)],
			};

			const updatedData = [...messages];

			updatedData.splice(searchableMessageIndex, 1, updatedChatItem);

			return { ...state, messages: [...updatedData] };
		}

		case CHANGE_MESSAGE: {
		}

		case SET_ACTIVE_CHAT: {
			return {
				...state,
				activeChat: action.payload,
				activeChatIndex: state.messages.indexOf(action.payload),
			};
		}

		default:
			return state;
	}
};
