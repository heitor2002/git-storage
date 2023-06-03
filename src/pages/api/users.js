import { query } from "@/lib/db"

export default async function handler(req, res) {
  if(req.method === "GET"){
    const users = await query({
      query: "SELECT * FROM users",
      values: []
    })
    res.status(200).json(users)
  }
  if(req.method === "POST"){
    const {username, email, password, userKey, privateKey} = req.body
    const users = await query({
      query: "INSERT INTO users (username, email, password, userKey, privateKey) VALUES (?,?,?,?,?)",
      values: [username, email, password, userKey, privateKey]
    })
    res.status(200).json(users)
  }
}
