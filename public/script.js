// Cargar productos desde la API
fetch('/api/products')
  .then(res => res.json())
  .then(products => {
    const byType = {
      pizza: 'pizzas',
      bebida_no_alcoholica: 'drinks',
      bebida_alcoholica: 'drinks',
      entrada: 'appetizers',
      salsa: 'sauces'
    };

    products.forEach(product => {
      const sectionId = byType[product.tipo];
      if (sectionId) {
        const section = document.getElementById(sectionId);

        const div = document.createElement('div');
        div.className = 'product';

        const precio = parseFloat(product.precio);
        const imageName = product.nombre
          .toLowerCase()
          .replace(/[^a-z0-9]/g, '-')
          .replace(/-+/g, '-');
        const imgPath = `images/${imageName}.png`;

        div.innerHTML = `
          <img src="${imgPath}" class="product-image" alt="${product.nombre}">
          <strong>${product.nombre}</strong> - $${precio.toFixed(2)}<br>
          <em>${product.descripcion}</em>
          <div class="cart-controls">
            <div class="qty-wrapper">
              <button class="qty-btn minus">−</button>
              <span class="qty-value">1</span>
              <button class="qty-btn plus">+</button>
            </div>
            <button class="add-btn">Add to cart</button>
          </div>
        `;

        section.appendChild(div);

        // Lógica para el contador personalizado
        const addButton = div.querySelector('.add-btn');
        const qtyDisplay = div.querySelector('.qty-value');
        const minusBtn = div.querySelector('.qty-btn.minus');
        const plusBtn = div.querySelector('.qty-btn.plus');

        let quantity = 1;

        minusBtn.addEventListener('click', () => {
          if (quantity > 1) {
            quantity--;
            qtyDisplay.textContent = quantity;
          }
        });

        plusBtn.addEventListener('click', () => {
          quantity++;
          qtyDisplay.textContent = quantity;
        });

        addButton.addEventListener('click', () => {
          alert(`✅ Added ${quantity} x ${product.nombre} to cart`);
        });
      }
    });
  });

// Lógica de pestañas
document.querySelectorAll('.tab-button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
    button.classList.add('active');

    const target = button.getAttribute('data-tab');
    document.querySelectorAll('.tab-content').forEach(div => {
      div.classList.remove('active');
    });
    document.getElementById(target).classList.add('active');
  });
});
