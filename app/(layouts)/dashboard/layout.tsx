"use client";
import Sidebar from "@/components/Dashboard/Sidebar";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const axiosPublic = useAxiosPublic();
  const user = { email: "admin@example.com" };

  const { data: userData, isLoading } = useQuery({
    queryKey: ["userRole", user?.email],
    enabled: !!user?.email,
    retry: 3,
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/${user?.email}`);
      return res.data;
    },
  });

  const role = userData?.role?.toLowerCase() || "user";

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-(--bg-primary)">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-l-2 border-brand"></div>
      </div>
    );
  }

  return (
    <div className="bg-(--bg-primary) overflow-hidden transition-colors duration-300 grid grid-cols-12 h-screen w-full">
      <div className="col-span-2">
        <Sidebar role={role} />
      </div>

      <main className="col-span-10 overflow-y-auto">{children}</main>
    </div>
  );
};

export default DashboardLayout;
