export async function loginValidation(body) {
  const response = await fetch("http://localhost:3000/api/users");
  const data = await response.json();

  const user = data.find((user) => body.username === user.username);

  if (!user) {
    return "Usuário não encontrado";
  }
}
