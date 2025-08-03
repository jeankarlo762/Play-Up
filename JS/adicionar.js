
let cart = JSON.parse(localStorage.getItem('carrinho')) || [];

function addToCart(nome, precoTexto) {
  const precoNumerico = parseFloat(precoTexto.replace('R$', '').replace(',', '.'));
  const existingItem = cart.find(item => item.nome === nome);

  if (existingItem) {
    existingItem.quantidade++;
  } else {
    cart.push({ nome: nome, preco: precoNumerico, quantidade: 1 });
  }

  renderCart();
  localStorage.setItem('carrinho', JSON.stringify(cart));
  document.getElementById('cartSidebar').classList.add('visible'); 
}

function removeFromCart(nome) {
  const itemIndex = cart.findIndex(item => item.nome === nome);

  if (itemIndex > -1) {
    const item = cart[itemIndex];
    if (item.quantidade > 1) {
      item.quantidade--;
    } else {
      cart.splice(itemIndex, 1);
    }
  }

  renderCart();
  localStorage.setItem('carrinho', JSON.stringify(cart));
}

function renderCart() {
  const lista = document.getElementById('cartItems');
  lista.innerHTML = '';

  let total = 0;

  if (cart.length === 0) {
    const emptyMessage = document.createElement('li');
    emptyMessage.textContent = 'Seu carrinho está vazio.';
    emptyMessage.style.textAlign = 'center';
    emptyMessage.style.padding = '20px';
    emptyMessage.style.color = '#555';
    lista.appendChild(emptyMessage);
  } else {
    cart.forEach(item => {
      const itemLi = document.createElement('li');
      itemLi.classList.add('cart-item');

      const itemInfo = document.createElement('span');
      itemInfo.textContent = `${item.nome} (x${item.quantidade}) - R$ ${(item.preco * item.quantidade).toFixed(2).replace('.', ',')}`;
      itemLi.appendChild(itemInfo);

      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remover';
      removeBtn.classList.add('remove-item-btn');
      removeBtn.onclick = () => removeFromCart(item.nome);
      itemLi.appendChild(removeBtn);

      lista.appendChild(itemLi);
      total += item.preco * item.quantidade;
    });
  }

  document.getElementById('cartTotal').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

document.querySelectorAll('.botao-adicionar').forEach(botao => {
  botao.addEventListener('click', () => {
    const produto = botao.closest('.produto');
    const nome = produto.querySelector('h3').textContent;
    const preco = produto.querySelector('.preco').textContent;
    addToCart(nome, preco);
  });
});

function fecharCarrinho() {
  document.getElementById('cartSidebar').classList.remove('visible');
}


document.addEventListener('DOMContentLoaded', renderCart);

function checkout() {
  if (cart.length === 0) {
    alert("Seu carrinho está vazio.");
    return;
  }

  sessionStorage.setItem('produtosPagamento', JSON.stringify(cart)); 
  window.location.href = "pagamento.html"; 
}

const listaProdutos = document.getElementById('lista-produtos');
  const carrinho = JSON.parse(sessionStorage.getItem('produtosPagamento')) || [];

  if (carrinho.length === 0) {
    listaProdutos.innerHTML = '<p style="color: #888;">Nenhum produto no carrinho.</p>';
  } else {
    let total = 0;
    const ul = document.createElement('ul');
    ul.style.listStyle = 'none';
    ul.style.padding = '0';

    carrinho.forEach(item => {
      const li = document.createElement('li');
      li.style.padding = '8px 0';
      li.textContent = `${item.nome} (x${item.quantidade}) - R$ ${(item.preco * item.quantidade).toFixed(2).replace('.', ',')}`;
      ul.appendChild(li);
      total += item.preco * item.quantidade;
    });

    listaProdutos.appendChild(ul);

    const totalDiv = document.createElement('div');
    totalDiv.style.marginTop = '15px';
    totalDiv.style.fontWeight = 'bold';
    totalDiv.textContent = `Total a pagar: R$ ${total.toFixed(2).replace('.', ',')}`;
    listaProdutos.appendChild(totalDiv);
  }