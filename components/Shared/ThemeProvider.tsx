"use client";
import { RootState } from "@/store";
import { setTheme } from "@/store/slices/themeSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.mode);

  useEffect(() => {
    // লোকাল স্টোরেজ থেকে থিম রিড করা
    const savedTheme = localStorage.getItem("theme") || "light";
    dispatch(setTheme(savedTheme));
  }, [dispatch]);

  useEffect(() => {
    // HTML বা Body-তে ক্লাস যোগ করা
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  return <>{children}</>;
}
