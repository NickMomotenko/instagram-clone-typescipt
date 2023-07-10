import { combineReducers, createStore } from "redux";

import { composeWithDevTools } from "@redux-devtools/extension";

import { postsReducer } from "./posts/reducer";
import { userReducer } from "./user/reducer";
import { authReducer } from "./auth/reducer";
import { directReducer } from "./direct/reducer";
import { appReducer } from "./app/reducer";

const reducer = combineReducers({
	app: appReducer,
	posts: postsReducer,
	authUser: userReducer,
	auth: authReducer,
	direct: directReducer,
});

function saveToLocalStorage(state: any) {
	try {
		const serialisedState = JSON.stringify(state);
		localStorage.setItem("store", serialisedState);
	} catch (e) {
		console.warn(e);
	}
}

function loadFromLocalStorage() {
	try {
		const serialisedState = localStorage.getItem("store");
		if (serialisedState === null) return undefined;
		return JSON.parse(serialisedState);
	} catch (e) {
		console.warn(e);
		return undefined;
	}
}

const store = createStore(reducer, loadFromLocalStorage(), composeWithDevTools());

store.subscribe(() => saveToLocalStorage(store.getState()));

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;