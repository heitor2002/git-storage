import { Layout } from "@/components/Layout";
import Head from "next/head";

export default function AddNewRepo() {
  return (
    <>
      <Head>
        <title>Novo repositório</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="form-new-repo">
          <form>
            <input type="text" placeholder="Adicionar repositório:" />
            <fieldset>
              <div>
                <input
                  type="radio"
                  name="public-private-radio"
                  id="public-radio"
                />
                <label>Público</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="public-private-radio"
                  id="private-radio"
                />
                <label>Privado</label>
              </div>
            </fieldset>
            <input type="submit" />
          </form>
        </div>
      </Layout>
    </>
  );
}
