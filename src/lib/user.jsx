export default async function registerValidation(body) {
 
  const response = await fetch("http://localhost:3000/api/users");
  const data = await response.json();
  
  const user = data.find((username) => body.username === username.username);
  const userEmail = data.find((email) => body.email === email.email);
  
  if (user) {
    console.log("Usuário já cadastrado!");
    return "Usuário já cadastrado!"
  } else if(userEmail){
      console.log("E-mail já cadastrado!")
      return "E-mail já cadastrado!"
  }else if (body.email !== body.confirmEmail) {
    console.log("E-mails incompatíveis")
    return "E-mails incompatíveis"
  } else if (body.password !== body.confirmPassword) {
    console.log("Senhas incompatíveis")
    return "Senhas incompatíveis"
  }else{
    console.log("Sucess")
    return "Cadastrando..."
  }
  
}

