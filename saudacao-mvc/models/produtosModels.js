module.exports = {
  gerarMensagemProdutos: (id, descricao, quantidade, valor_unitario) => {
    return `Produto cadastrado com sucesso!<br>
    <strong>ID:</strong> ${id}<br>
    <strong>Descrição:</strong> ${descricao}<br>
    <strong>Quantidade:</strong> ${quantidade || "N/A"}<br>
    <strong>Valor Unitário:</strong> ${valor_unitario || "N/A"}`;
  },
};
