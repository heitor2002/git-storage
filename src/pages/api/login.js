import { loginValidation } from "@/lib/userLogin";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {username, password} = req.body;
    const dataUser = {username, password}
    try {
      const user = await loginValidation(dataUser);
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json(err.message);
    }
  }
}
