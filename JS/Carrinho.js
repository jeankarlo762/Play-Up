function addToCart(nome, preco) {
  const lista = document.getElementById('cartItems');
  const item = document.createElement('li');
  item.textContent = `${nome} - ${preco}`;
  lista.appendChild(item);
  document.getElementById('cartSidebar').classList.add('visible');
  atualizarTotal(preco);
}

function atualizarTotal(valorTexto) {
  const totalEl = document.getElementById('cartTotal');
  let totalAtual = parseFloat(totalEl.textContent.replace('R$', '').replace(',', '.'));
  let valor = parseFloat(valorTexto.replace('R$', '').replace(',', '.'));
  totalAtual += valor;
  totalEl.textContent = `R$ ${totalAtual.toFixed(2).replace('.', ',')}`;
}

document.querySelectorAll('.botao-adicionar').forEach(botao => {
  botao.addEventListener('click', () => {
    const produto = botao.closest('.produto');
    const nome = produto.querySelector('h3').textContent;
    const preco = produto.querySelector('.preco').textContent;
    addToCart(nome, preco);
  });
});

