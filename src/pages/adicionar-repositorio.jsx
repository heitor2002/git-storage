import { Layout } from "@/components/Layout";

export default function AddNewRepo() {
  return (
    <>
      <Layout>
        <div className="form-new-repo">
          <form>
            <input type="text" placeholder="Adicionar repositório:" />
            <fieldset>
              <div>
                <input type="radio" name="public-private-radio" id="public-radio" />
                <label>Público</label>
              </div>
              <div>
                <input type="radio" name="public-private-radio" id="private-radio" />
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
