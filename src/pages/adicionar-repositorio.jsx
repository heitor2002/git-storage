import { Layout } from "@/components/Layout";

export default function AddNewRepo(){
    return(
        <>
        <Layout>
            <div className="form-new-repo">
                <form>
                    <input type="text" placeholder="Adicionar repositório:"/>
                </form>
            </div>
        </Layout>
        </>
    )
}