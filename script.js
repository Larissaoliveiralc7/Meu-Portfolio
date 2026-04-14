// 📦 LISTA DE PROJETOS
const projetos = [
  {
    nome: "JF Service",
    descricao: "Plataforma de serviços locais",
    link: "#"
  },
  {
    nome: "Sistema de Agendamento",
    descricao: "Sistema online",
    link: "#"
  },
  {
    nome: "Portfólio Web",
    descricao: "Meu site profissional",
    link: "#"
  }
];

// INSERIR PROJETOS
const carregarProjetos = () => {
  const container = document.getElementById("lista-projetos");

  if (!container) return;

  container.innerHTML = ""; // limpa antes

  projetos.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${p.nome}</h3>
      <p>${p.descricao}</p>
      <a href="${p.link}" class="btn">Ver</a>
    `;

    container.appendChild(card);
  });
};

// TEXTO DIGITANDO
const texto = "Desenvolvedora Front-End";
let i = 0;

function escrever() {
  const el = document.getElementById("typing");

  if (el && i < texto.length) {
    el.innerHTML += texto[i];
    i++;
    setTimeout(escrever, 80);
  }
}

// INICIAR
window.addEventListener("load", () => {
  carregarProjetos();
  escrever();
});