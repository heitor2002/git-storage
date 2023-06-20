import { fetchUser } from "@/lib/user";
import { decodedToken } from "@/lib/userLogin";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const cookieToken = getCookie("authorization");

  const signIn = async (userLogin) => {
    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userLogin),
      });

      const json = await response.json();
      if (response.status !== 201) throw new Error(json);

      console.log(json);
      setCookie("authorization", json);
      if (!cookieToken) {
        console.log("Não possui cookies");
      } else {
        console.log("Possui cookies");
      }
      await router.push("/profile");
      window.location.reload()
    } catch (err) {
      throw Error;
    }
  };

  const signOut = async () => {
    await deleteCookie("authorization");
    await setUser(null)
    window.location.reload()
  }

  useEffect(() => {
    const token = decodedToken(cookieToken);
    setUser(token);
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
