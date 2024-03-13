import { useEffect, useState } from "react";

import { decodeJwt } from "jose";
import { User } from "../types";

const getUserData = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;
  const decodedToken = decodeJwt<{ user: User }>(token);
  return decodedToken.user;
};

export const useUserData = () => {
  const [user, setUser] = useState<User | null>(getUserData);

  useEffect(() => {
    const user = getUserData();
    setUser(user);
  }, []);

  return user;
};