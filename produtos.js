// Função para filtrar produtos
function filterProducts(category) {
    const allProducts = document.querySelectorAll('.product');
    
    allProducts.forEach(product => {
      if (product.classList.contains(category) || category === 'all') {
        product.style.display = 'block'; // Exibe o produto
      } else {
        product.style.display = 'none'; // Oculta o produto
      }
    });
  }
  
  // Inicializar a exibição de todos os produtos ao carregar a página
  window.onload = function() {
    filterProducts('all'); // Exibe todos os produtos inicialmente
  };
  