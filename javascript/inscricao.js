document
  .getElementById("formulario")
  .addEventListener("submit", validarFormulario);

function validarFormulario(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const termos = document.getElementById("termos").checked;

  if (!nome || !email || !telefone) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if (!termos) {
    alert("Por favor, aceite os termos e condições.");
    return;
  }

  const dados = { nome, email, telefone };

  localStorage.setItem("cadastroEvento", JSON.stringify(dados));

  alert("Cadastro realizado com sucesso!");
  window.location.href = "inscricaoConfirmada.html";

  document.querySelector("form").reset();

  console.log(dados);
}
