import { query } from "@/lib/db"

export default async function handler(req, res) {
  if(req.method === "GET"){
    const users = await query({
      query: "SELECT * FROM private_rep",
      values: []
    })
    res.status(200).json(users)
  }
  if(req.method === "POST"){
    const {link, privateKey} = req.body;
    console.log(privateKey, link)

    const rep = await query({
        query: "INSERT INTO private_rep (link_rep, private_key) VALUES (?,?)",
        values: [link, privateKey]
      })
      res.status(200).json(rep)
  }
}
