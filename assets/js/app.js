const resultado = document.querySelector("#resultado");

const api = "http://localhost:5600/";

const loadData = async () => {
  // res - response, resposta
  const res = await fetch(api + "clientes");
  const data = await res.json();

  return data;
};

const result = loadData();

console.log(result);
