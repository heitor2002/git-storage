import { query } from "@/lib/db"

export default async function handler(req, res) {
  if(req.method === "GET"){
    const users = await query({
      query: "SELECT * FROM public_rep",
      values: []
    })
    res.status(200).json(users)
  }
}
