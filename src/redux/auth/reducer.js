import { baseRoutes } from "../../helpers/base-routes";
import { LOGIN, LOGUT, SIGNUP, SET_LOCATION_PATH } from "./types";

const initialState = {
	isAuth: true,
	locationPath: window.location.pathname,
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN: {
			const {
				data: [login, password],
				isPreview,
			} = action.payload;

			if (!isPreview) {
				alert('Welcome!');
			}

			return { ...state, isAuth: true };
		}

		case LOGUT: {
			return { ...state, locationPath: `${baseRoutes.login}`, isAuth: false };
		}

		case SIGNUP: {
			alert('Success , now u can login!');
			return state;
		}

		case SET_LOCATION_PATH: {
			return { ...state, locationPath: action.payload };
		}

		default:
			return state;
	}
};
