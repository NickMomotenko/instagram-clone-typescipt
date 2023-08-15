import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AppWrapp } from "./AppStyled";

import { authRoutes, authRoutesArray, baseRoutes } from "./helpers/base-routes";

import Preloader from "./pages/Preloader";
import Login from "./pages/Login";
import Direct from "./components/Direct";

import LoginBlock from "./components/LoginForm/LoginBlock";
import CreateNewAccount from "./components/LoginForm/CreateNewAccount";
import ForgotPassword from "./components/LoginForm/ForgotPassword";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";

import Posts from "./components/Posts";

import Main from "./pages/Main/Main";

import { useActive } from "./hooks/useActive";
import Edit from "./components/Edit";
import Profile from "./components/Profile";
import EditGeneral from "./components/Edit/EditGeneral";
import { useEffect, useRef } from "react";
import { IPost } from "./redux/types";
import { useWindowResize } from "./hooks/useWindowResize";
import { useNavigate } from "react-router";
import { SET_PRELOADER_STATUS } from "./redux/app/types";
import { togglePreloader } from "./redux/app/helper";
import { SET_LOCATION_PATH } from "./redux/auth/types";

export const App = () => {
	const { isPreloaderActive } = useSelector((state: RootState) => state.app);
	const { posts: globalPosts }: IPost[] | any = useSelector(
		(state: RootState) => state.posts
	);

	const {
		authUser: { posts: authUserPosts },
	} = useSelector((state: RootState) => state.authUser);

	const { isAuth, locationPath } = useSelector(
		(state: RootState) => state.auth
	);

	const dispatch = useDispatch<AppDispatch>();
	const popup = useActive();
	const navigate = useNavigate();
	const location = useLocation().pathname;

	const postContentRef = useRef<any>(null);

	const windowWidth = useWindowResize();

	useEffect(() => {
		// if (location === baseRoutes.base || location === baseRoutes.login) {
		// 	dispatch({ type: SET_PRELOADER_STATUS, payload: true });
		//
		// 	setTimeout(() => {
		// 		dispatch({ type: SET_PRELOADER_STATUS, payload: false });
		// 	}, 1000);
		// }

		dispatch({ type: SET_LOCATION_PATH, payload: location });
	}, [location]);

	useEffect(() => {
		if (windowWidth > 1100) {
			if (postContentRef.current) {
				postContentRef.current.style = ``;
			}
		}

		if (windowWidth <= 1100) {
			if (postContentRef.current) {
				postContentRef.current.style = `grid-template-columns: repeat(3 , 1fr) ;`;
			}
		}

		if (windowWidth <= 868) {
			if (postContentRef.current) {
				postContentRef.current.style = `
          grid-template-columns: repeat(2 , 1fr) ;
          padding: 0 5%;
        `;
			}
		}

		if (windowWidth <= 670) {
			if (postContentRef.current) {
				postContentRef.current.style = `
          grid-template-columns: repeat(1 , 1fr) !important;
          padding: 0 5%;
        `;
			}
		}
	}, [windowWidth]);

	useEffect(() => {
		if (!isAuth) {
			navigate(baseRoutes.login);
		}

		if (isAuth) {
			if (authRoutesArray.includes(locationPath)) {
				navigate(baseRoutes.base);
			} else {
				navigate(locationPath);
			}
		}
	}, [isAuth]);

	return (
		<AppWrapp>
			<Preloader isActive={isPreloaderActive} />

			<Routes>
				{/* <Route path={baseRoutes.stories} element={<Stories />} /> */}
				<Route path={baseRoutes.direct} element={<Direct />} />
				<Route path={baseRoutes.login} element={<Login />}>
					<Route path="" element={<LoginBlock />} />
					<Route path={authRoutes.create} element={<CreateNewAccount />} />
					<Route path={authRoutes.forgot} element={<ForgotPassword />} />
				</Route>
				<Route path={baseRoutes.base} element={<Main />}>
					<Route
						path=""
						element={<Posts posts={globalPosts} contentRef={postContentRef} />}
					/>
					<Route path={baseRoutes.profile} element={<Profile />}>
						<Route path="edit" element={<Edit />}>
							<Route path="general" element={<EditGeneral />} />
						</Route>
					</Route>
				</Route>
				<Route
					path="*"
					element={
						<Navigate
							to={isAuth ? baseRoutes.base : baseRoutes.login}
							replace
						/>
					}
				/>
			</Routes>
		</AppWrapp>
	);
};
