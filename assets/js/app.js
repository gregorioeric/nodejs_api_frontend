const resultado = document.querySelector("#resultado");

const api = "http://localhost:5600/";

const loadData = async () => {
  // res - response, resposta
  const res = await fetch(api + "clientes");
  const data = await res.json();

  return data;
};

const showData = async () => {
  const getAllClientes = await loadData();

  const showClientes = getAllClientes
    .map((cliente) => {
      return `
        <div class="row">
          <div class="col">${cliente.nome}</div>
          <div class="col">${cliente.email}</div>
          <div class="col">${cliente.telefone}</div>
          <div class="col">${cliente.cidade}</div>
          <div class="col">${cliente.estado}</div>
          <div class="col">${cliente.data_cadastro}</div>
          <div>
              <button>Editar</button>
              <button>Deletar</button>
          </div>
      </div>
      `;
    })
    .join("");

  resultado.innerHTML = showClientes;
};

showData();
