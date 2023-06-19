import { getCookie } from "cookies-next";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Navigation = () => {
  const [activeProfile, setActiveProfile] = useState(false)
  const cookieToken = getCookie("authorization");

  useEffect(() => {
    if(cookieToken){
      setActiveProfile(true)
    }
  }, [])

  return (
    <>
      <nav className="navigation-bar">
        <Link href={"/"}>Repositório Público</Link>
        <Link href={"/private"}>Repositório Privado</Link>
        <Link href={"/adicionar-repositorio"}>Adicionar projeto</Link>
        {!activeProfile && <Link href={"/login"}>Entrar / Registrar</Link>}
        {activeProfile && <Link href={"/profile"}>Meu perfil</Link>}
      </nav>
    </>
  );
};
