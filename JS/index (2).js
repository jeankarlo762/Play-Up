var elem = document.querySelector('.gallery');
var flkty = new Flickity(elem, {
    wrapAround: true,
    autoPlay: true,
    pageDots: false
});

function filtrarProdutos(categoria) {
    const produtos = document.querySelectorAll('.produto');
    produtos.forEach(produto => {
        produto.style.display = produto.classList.contains(categoria) ? 'block' : 'none';
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const cartBtn = document.querySelector('.carrinho-btn');
    const cartSidebar = document.getElementById('cartSidebar');

    function toggleCart() {
      cartSidebar.classList.toggle('visible');
    }

    cartBtn.addEventListener('click', function (e) {
      e.preventDefault();
      toggleCart();
    });
  });