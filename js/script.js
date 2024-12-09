document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.buy-button');
  const cartModal = document.getElementById('cart-modal');
  const cart = document.getElementById('cart');
  const closeBtn = document.querySelector('.close-btn');
  const checkoutBtn = document.getElementById('checkout-btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const productName = button.dataset.product;
      const listItem = document.createElement('li');
      listItem.textContent = productName;
      cart.appendChild(listItem);
      cartModal.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    cartModal.style.display = 'none';
  });

  checkoutBtn.addEventListener('click', () => {
    alert('Proceeding to checkout...');
    cart.innerHTML = '';
    cartModal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === cartModal) {
      cartModal.style.display = 'none';
    }
  });
});
