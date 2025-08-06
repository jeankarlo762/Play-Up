document.getElementById("frete").addEventListener("change", function () {
  const regioes = {
    "sul": 20,
    "sudeste": 25,
    "norte": 40,
    "nordeste": 35,
    "centro-oeste": 30
  };

  const selecao = this.value;
  const valor = regioes[selecao];
  const textoExibicao = selecao ? `💰 Frete para ${selecao.toUpperCase()}: R$ ${valor},00` : "";

  document.getElementById("frete-valor").textContent = textoExibicao;
});
