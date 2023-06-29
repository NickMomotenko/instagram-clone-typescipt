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

export const store = createStore(reducer, composeWithDevTools());

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
