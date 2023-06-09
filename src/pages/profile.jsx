import { Layout } from "@/components/Layout";
import { AuthContext } from "@/context/AuthContext";
import { verifyToken } from "@/lib/userLogin";
import { getCookie } from "cookies-next";
import Head from "next/head";
import { useContext } from "react";

export default function Profile() {
  const {user, signOut} = useContext(AuthContext);
  const profileImage = `https://github.com/${user?.username}.png`
  return (
    <>
      <Head>
        <title>Página inicial</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="flex-profile">
        <img src={profileImage} alt="" />
        <div className="data-profile">
            <ul>
                <li>Username: {user?.username}</li>
                <li>Email: {user?.email}</li>
                <li>Repositórios: {user?.userKey}</li>
                <button onClick={signOut}>Sair</button>
            </ul>
        </div>
        </div>
      </Layout>
    </>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  try {
    const token = getCookie("authorization", { req, res });
    if(!token) throw new Error ("Token inválido")
    verifyToken(token)
    return {
      props: {},
    };
  } catch (err) {
    return{
      redirect:{
        permanent: false,
        destination: "/login"
      },
      props:{}
    }
  }
};