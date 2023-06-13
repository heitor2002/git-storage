import { setCookie } from "cookies-next";
import { useRouter } from "next/router";
import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const router = useRouter()
  const signIn = async (userLogin) => {
    try{
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(userLogin)
      })

      const json = await response.json()
      if(response.status !== 201) throw new Error (json)

      console.log(json)
      setCookie("authorization", json)
      router.push("/adicionar-repositorio")
    }catch(err){

    }
  };
  return <AuthContext.Provider value={{signIn}}>{children}</AuthContext.Provider>;
};
