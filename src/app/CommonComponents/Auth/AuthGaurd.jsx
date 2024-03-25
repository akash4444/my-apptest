"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { resetAuth, updateAuth } from "../../redux/auth/authSlice";
import { adminInPages } from "@/constant";

export default function AuthGuard({ children }) {
  const router = useRouter();
  const currentPath = usePathname();
  const dispatch = useDispatch();
  const { role } = useSelector((state) => state.auth || {});
  const [loading, setLoading] = useState(false);
  const isAdmin = role === "admin";

  if (loading) {
    return (
      <div>
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      </div>
    );
  }
  // Render loading state or children component
  return <>{children}</>;
}
