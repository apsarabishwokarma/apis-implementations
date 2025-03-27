"use client";

import { API_PATH } from "@/data/apipath";

import { useEffect } from "react";

export default function LogoutPage() {
  useEffect(() => {
    const logout = async () => {
      try {
        await fetch(`${API_PATH}/auth/logout`, { method: "POST" });
      } catch (error) {
        console.error("Logout failed:", error);
      }
    };

    logout();
  });

  return <p>Logging out...</p>;
}
