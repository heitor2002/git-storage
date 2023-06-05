import jwt from "jsonwebtoken";

const createToken = (user) => {

  const SECRET_KEY = "g6sd5a46s8d46g1df684n663fg547f987q65we798g1"
  
  const payload = {
    username: user.username,
    email: user.email,
  };

  return jwt.sign(payload, SECRET_KEY)
};

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
    console.log(token)
    return token
  }
}
