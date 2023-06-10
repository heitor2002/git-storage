import jwt from "jsonwebtoken";

const SECRET_KEY = "g6sd5a46s8d46g1df684n663fg547f987q65we798g1gdf594h98a19w8e4q98"
const createToken = (user) => {
 
  const payload = {
    username: user.username,
    email: user.email,
  };

  return jwt.sign(payload, SECRET_KEY)
};

const readToken = (token) => {
  try{
    return jwt.verify(token, SECRET_KEY)
  }catch(err){
    throw new Error("Token inválido!")
  }
}

export const verifyToken = (token) => {
  readToken(token)
}

export async function loginValidation(body) {
  const response = await fetch("http://localhost:3000/api/users");
  const data = await response.json();

  const user = data.find((user) => body.username === user.username);

  if (!user) {
    return "Usuário não encontrado";
  } else if (body.password !== user.password) {
    return "Senha incorreta!";
  } else {
    const token = createToken(user);
    return token
  }
}
