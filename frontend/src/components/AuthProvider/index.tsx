import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const fetchWhoAmI = useCallback(async () => {
    const response = await axios.get("/api/auth/whoami");
    const user = response.data;

    if (!user?.id && !["/login", "/signup"].includes(router.pathname)) {
      router.push("/");
    }
  }, [router]);

  useEffect(() => {
    fetchWhoAmI();
  }, [fetchWhoAmI]);

  return <div>{children}</div>;
};
