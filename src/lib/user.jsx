const register = async (user) => {
    const {username, email, password, userKey, privateKey} = user;
    console.log(username, email, password, userKey, privateKey)
};

export default async function registerValidation(body) {
  const response = await fetch("http://localhost:3000/api/users");
  const data = await response.json();

  const user = data.find((username) => body.username === username.username);
  const userEmail = data.find((email) => body.email === email.email);

  if (user) {
    return "Usuário já cadastrado!";
  } else if (userEmail) {
    return "E-mail já cadastrado!";
  } else if (body.email !== body.confirmEmail) {
    return "E-mails incompatíveis";
  } else if (body.password !== body.confirmPassword) {
    return "Senhas incompatíveis";
  } else {
    register(body)
    return "Cadastrando...";
  }
}
