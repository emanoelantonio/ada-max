import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { ROUTES } from "./constants";
import { setupI18n } from "./lang/setup";
import { Home } from "./modules/Home";
import { Login } from "./modules/Login";
import { Backstage } from "./modules/backstage";
import { CreateProfile } from "./modules/profile/create-profile";
import { DeleteProfile } from "./modules/profile/delete-profile";
import { EditProfile } from "./modules/profile/edit-profile";
import { Profile } from "./modules/profile/profile";
import { AuthProvider } from "./providers/AuthProvider";

import "./styles/main.css";
import "./styles/reset.css";


const queryClient = new QueryClient();

setupI18n();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path={ROUTES.LOGIN} element={<Login/>} />
            <Route path={ROUTES.PROFILE} element={
              <ProtectedRoute role="user">
                <Profile />
              </ProtectedRoute>}
            />
            <Route path={ROUTES.CREATE_PROFILE} element={
              <ProtectedRoute role="user">
                <CreateProfile />
              </ProtectedRoute>}
            />
            <Route path={ROUTES.EDIT_PROFILE} element={
              <ProtectedRoute role="user">
                <EditProfile />
              </ProtectedRoute>}
            />
            <Route path={ROUTES.DELETE_PROFILE} element={
              <ProtectedRoute role="user">
                <DeleteProfile />
              </ProtectedRoute>}
            />
            <Route path={ROUTES.BACKSTAGE} element={
              <ProtectedRoute role="admin">
                <Backstage />
              </ProtectedRoute>}
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
