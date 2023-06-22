import { query } from "@/lib/db"

export default async function handler(req, res) {
  if(req.method === "GET"){
    const repository = await query({
      query: "SELECT * FROM public_rep",
      values: []
    })
    res.status(200).json(repository)
  }
  if(req.method === "POST"){
    const {username, link} = req.body;
    console.log(username, link)

    const rep = await query({
        query: "INSERT INTO public_rep (user, link) VALUES (?,?)",
        values: [username, link]
      })
      res.status(200).json(rep)
  }
}
