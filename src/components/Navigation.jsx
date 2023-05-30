import Link from "next/link";

export const Navigation = () => {
  return (
    <>
      <nav className="navigation-bar">
        <Link href={"/"}>Repositório Público</Link>
        <Link href={"/private"}>Repositório Privado</Link>
        <Link href={"/adicionar-repositorio"}>Adicionar projeto</Link>
        <Link href={"/login"}>Entrar / Registrar</Link>
      </nav>
    </>
  );
};
