import Button from "@/components/ui/button";
import { API_PATH } from "@/data/apipath";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function FetchImplementations() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    fetch(`${API_PATH}/auth/me`, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.id) {
          setIsAuthenticated(true);
        }
      })
      .catch(() => setIsAuthenticated(false));
  }, []);

  return (
    <div className="p-4 border">
      <div className="mt-5 flex gap-2 wrap">
        {isAuthenticated ? (
          <Link href="/fetch/logout">
            <Button>Logout</Button>
          </Link>
        ) : (
          <>
            <Link href="/fetch/login">
              <Button>Login</Button>
            </Link>
            <Link href="/fetch/signup">
              <Button>Signup</Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
