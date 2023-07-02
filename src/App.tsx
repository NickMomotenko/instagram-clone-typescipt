import { Routes, Route, Navigate } from "react-router-dom";
import { AppWrapp } from "./AppStyled";

import { authRoutes, baseRoutes } from "./helpers/base-routes";

import Preloader from "./pages/Preloader";
import Login from "./pages/Login";
import Direct from "./components/Direct";

import LoginBlock from "./components/LoginForm/LoginBlock";
import CreateNewAccount from "./components/LoginForm/CreateNewAccount";
import ForgotPassword from "./components/LoginForm/ForgotPassword";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./redux/store";
import { SET_PRELOADER_STATUS } from "./redux/app/types";

import Posts from "./components/Posts";

import Main from "./pages/Main/Main";

import { useActive } from "./hooks/useActive";
import Edit from "./components/Edit";
import Profile from "./components/Profile";
import EditGeneral from "./components/Edit/EditGeneral";
import EditPosts from "./components/Edit/EditPosts";
import { useEffect } from "react";

import React from "react";

export const App = () => {
  const { isPreloaderActive } = useSelector((state: RootState) => state.app);

  const dispatch = useDispatch<AppDispatch>();
  const popup = useActive();

  // delay timer in sec
  const delayTimer = 3;

  React.useEffect(() => {
    // dispatch({ type: SET_PRELOADER_STATUS, payload: false });
    // setTimeout(() => {
    //   dispatch({ type:  SET_PRELOADER_STATUS, payload: true });
    // }, delayTimer * 1000);
  }, []);

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
          <Route path="" element={<Posts />} />
          <Route path={baseRoutes.profile} element={<Profile />}>
            <Route path="edit" element={<Edit />}>
              <Route path="general" element={<EditGeneral />} />
              <Route path="posts" element={<EditPosts />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<Navigate to={baseRoutes.login} replace />} />
      </Routes>
    </AppWrapp>
  );
};
