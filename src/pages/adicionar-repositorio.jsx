import { Layout } from "@/components/Layout";

export default function AddNewRepo(){
    return(
        <>
        <Layout>
            <div className="form-new-repo">
                <form>
                    <input type="text" placeholder="Adicionar repositório:"/>
                    <fieldset>
                        <input type="checkbox" name="" id="" />
                        <input type="checkbox" name="" id="" />
                    </fieldset>
                </form>
            </div>
        </Layout>
        </>
    )
}