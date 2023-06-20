import { Layout } from "@/components/Layout";
import fetchApi from "@/hooks/fetchApi";
import { verifyToken } from "@/lib/userLogin";
import { getCookie } from "cookies-next";
import Head from "next/head";
import Link from "next/link";

export default function Private() {
  const { data } = fetchApi("http://localhost:3000/api/private");
  const extractRepositoryName = (url) => {
    const lastBarUrl = url.lastIndexOf("/");
    return url.substring(lastBarUrl + 1);
  };
  return (
    <>
      <Head>
        <title>Repositório privado</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <ul className="repository-list">
          {data.map((repository) => {
            const repositoryLink = repository.link_rep;

            const repositoryName =
              extractRepositoryName(repositoryLink).toUpperCase();

            return (
              <>
                <li>
                  <h2>{repositoryName}</h2>
                  <Link href={repositoryLink}>Acessar repositório</Link>
                </li>
              </>
            );
          })}
        </ul>
      </Layout>
    </>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  try {
    const token = getCookie("authorization", { req, res });
    if (!token) throw new Error("Token inválido");
    verifyToken(token);
    return {
      props: {},
    };
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  }
};
