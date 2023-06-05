import { Layout } from "@/components/Layout";
import { loginValidation } from "@/lib/userLogin";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState({
    username: "",
    password: ""
  })

  const onChangeInput = (e) => setUser({...user, [e.target.name]:e.target.value});

  const handleSubmit = async (e) => {
    e.preventDefault()
    loginValidation(user)
  }

  return (
    <>
      <Head>
        <title>Página de login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="form-login">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Usuário github:" name="username" value={user.username} onChange={onChangeInput}/>
            <input type="password" placeholder="Senha" name="password" value={user.password} onChange={onChangeInput}/>
            <p>Ainda não possui conta? <Link href={"/register"}>Cadastrar-se aqui!</Link></p>
            <input type="submit" value={"Entrar"} />
          </form>
        </div>
      </Layout>
    </>
  );
}
