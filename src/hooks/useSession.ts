"use client";

import { useUserStore } from "@store/user";
import { useEffect } from "react";
import { usePathname, useRouter } from "src/navigation";

const useSession = () => {
  const { setUser } = useUserStore((state) => state);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user");

      if (user) {
        setUser(JSON.parse(user));

        if (
          pathname === "/login" ||
          pathname === "/change-password" ||
          pathname === "/2fa"
        ) {
          router.replace("/dashboard");
        }
      }

      if (!user) {
        router.replace("/login");
      }
    }
  }, [router]);
};

export default useSession;
