"use client";

import { useEffect } from "react";
import { fetchUser } from "../lib/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const dispatch = useAppDispatch();
  const { isAuthenticated, user } = useAppSelector((state: any) => state.auth);

  useEffect(() => {
    if (!isAuthenticated && user.id === 0) {
      dispatch(fetchUser());
    }
  }, []);

  return <>{children}</>;
};

export default AuthProvider;
