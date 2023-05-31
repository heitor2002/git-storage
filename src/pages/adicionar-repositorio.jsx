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
                <input type="radio" name="public" id="public" />
                <label>Público</label>
              </div>
              <div>
                <input type="radio" name="public" id="public" />
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
