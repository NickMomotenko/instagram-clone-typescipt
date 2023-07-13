import { Navigate, Route, Routes } from "react-router-dom";
import { AppWrapp } from "./AppStyled";

import { authRoutes, baseRoutes } from "./helpers/base-routes";

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

export const App = () => {
	const { isPreloaderActive } = useSelector((state: RootState) => state.app);
	const { posts: globalPosts }: IPost[] | any = useSelector(
		(state: RootState) => state.posts
	);

	const {
		authUser: { posts: authUserPosts },
	} = useSelector((state: RootState) => state.authUser);

	const dispatch = useDispatch<AppDispatch>();
	const popup = useActive();

	const postContentRef = useRef<any>(null);

	const windowWidth = useWindowResize();

	// delay timer in sec
	const delayTimer = 3;

	useEffect(() => {
		// dispatch({ type: SET_PRELOADER_STATUS, payload: false });
		// setTimeout(() => {
		//   dispatch({ type:  SET_PRELOADER_STATUS, payload: true });
		// }, delayTimer * 1000);
	}, []);

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

	return (
		<AppWrapp>
			<Preloader isActive={isPreloaderActive} />

			<Routes>
				{/* <Route path={baseRoutes.stories} element={<Stories />} /> */}
				<Route path={baseRoutes.direct} element={<Direct />} />
				<Route
					path={baseRoutes.login}
					element={<Login isPreloaderActive={false} />}
				>
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
				<Route path="*" element={<Navigate to={baseRoutes.login} replace />} />
			</Routes>
		</AppWrapp>
	);
};
