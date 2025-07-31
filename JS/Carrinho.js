
  function getCarrinho() {
    return JSON.parse(localStorage.getItem('carrinho')) || [];
  }

  function salvarCarrinho(produtos) {
    localStorage.setItem('carrinho', JSON.stringify(produtos));
  }

  function atualizarContador() {
    const carrinho = getCarrinho();
    document.getElementById('contador-carrinho').textContent = carrinho.length;
  }

  function renderizarCarrinho() {
    const carrinho = getCarrinho();
    const lista = document.getElementById('lista-carrinho');
    lista.innerHTML = '';

    carrinho.forEach((item, index) => {
      const li = document.createElement('li');
      li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
      li.style.marginBottom = '10px';
      lista.appendChild(li);
    });
  }

  function adicionarAoCarrinho(nome, preco) {
    const carrinho = getCarrinho();
    carrinho.push({ nome, preco });
    salvarCarrinho(carrinho);
    atualizarContador();
    renderizarCarrinho();
    abrirCarrinho(); 
  }

  function abrirCarrinho() {
    document.getElementById('carrinhoSidebar').classList.add('visible');
  }

  function fecharCarrinho() {
    document.getElementById('carrinhoSidebar').classList.remove('visible');
  }

  document.getElementById('finalizarCompra').addEventListener('click', () => {
    window.location.href = 'pagamento.html';
  });

  document.getElementById('abrirCarrinho').addEventListener('click', abrirCarrinho);
  document.getElementById('fecharCarrinho').addEventListener('click', fecharCarrinho);

  atualizarContador();
  renderizarCarrinho();

