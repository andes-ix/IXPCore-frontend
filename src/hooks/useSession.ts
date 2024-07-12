"use client";

import { useUserStore } from "@store/user";
import { useEffect } from "react";
import { usePathname, useRouter } from "src/navigation";

const useSession = () => {
  const { setUser } = useUserStore((state) => state);
  const router = useRouter();
  const pathname = usePathname();

  const unauthRoutes = ["/login", "/change-password", "/2fa"];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user");

      if (user) {
        setUser(JSON.parse(user));

        if (unauthRoutes.includes(pathname)) {
          router.replace("/dashboard");
        }
      }

      if (!user) {
        if (unauthRoutes.includes(pathname)) {
          return;
        }
        router.replace("/login");
      }
    }
  }, [router]);
};

export default useSession;
