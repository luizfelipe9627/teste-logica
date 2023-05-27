const products = [
  "preto-PP",
  "preto-M",
  "preto-G",
  "preto-GG",
  "preto-GG",
  "branco-PP",
  "branco-G",
  "vermelho-M",
  "azul-XG",
  "azul-XG",
  "azul-XG",
  "azul-P",
];

module.exports = () => {
  const productsObject = {}; // Criado um objeto vazio chamado productsObject que vai armazenar os produtos convertidos.

  // O for of passa por cada item da array products.
  for (const item of products) {
    const [cor, tamanho] = item.split("-"); // Criado duas arrays, uma chamada cor e a outro chamada tamanho, para cada array o split divide a string do item atual em duas partes, sendo cor e tamanho e armazena nas arrays criadas, quando tiver o separador("-").

    // Faz uma verificação, se a cor atual já existe no objeto productsObject, caso não existir, executa o if.
    if (!productsObject[cor]) {
      productsObject[cor] = {}; // Insere dentro da cor atual do objeto productsObject um objeto vazio.
    } // Se o tamanho não existir dentro da cor atual executa o if.
    if (!productsObject[cor][tamanho]) {
      productsObject[cor][tamanho] = 1; // Adiciona na cor atual o valor 1 no tamanho da cor atual.
    } // Senão se o tamanho da cor atual já existir executa o else.
    else {
      productsObject[cor][tamanho] += 1; // Incrementa(soma com o que já tiver) no productsObject o valor 1 ao valor de tamanho já existente.
    }
  }

  return productsObject; // Retorna o objeto com as cores e todos seus tamanhos.
};
