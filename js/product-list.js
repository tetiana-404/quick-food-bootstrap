class ProductList {
  constructor(cart) {
    this.cart = cart;
    this.container = document.querySelector('.products-container');
    this.productService = new ProductsService();
    this.productService
      .getProducts()
      .then(() => this.renderProducts())
      .then(() => this.addEventListeners());    
  }
  async renderProducts() {
    let productListDomString = '';
    const products = await this.productService.getProducts();
    products.forEach(product => {
      productListDomString += `<div class="range col-12 col-sm-6 col-md-4">
                  <div class="card product menu-variant-1">
                    <img class="card-img-top img-responsive reveal-inline-block" src="img/products/${product.image}" 
                        alt="${product.title}" height="260">
                    <div class="card-body d-flex flex-column caption">
                      <h4 class="title">${product.title}</h4>
                      <p class="card-text description">${product.description}</p>
                      <p class="price">${product.price} грн.</p>
                      <div class="d-flex justify-content-around card-buttons">
                        <button class="btn btn-info" data-toggle="modal"
                          data-target="#productInfoModal" data-id="${product.id}">Детальніше
                        </button>
                        <button class="btn btn-primary buy" data-id="${product.id}">
                          Замовити
                        </button>
                      </div>
                    </div>
                  </div>
                </div>`;
    });
    this.container.innerHTML = productListDomString;
  }
  addEventListeners() {
    document
      .querySelectorAll('.product .btn-info')
      .forEach(button =>
        button.addEventListener('click', event =>
          this.handleProductInfoClick(event)
        )
      );
    document
      .querySelectorAll(
        '.card.product button.buy, #productInfoModal button.buy'
      )
      .forEach(button =>
        button.addEventListener('click', event =>
          this.handleProductBuyClick(event)
        )
      );
  }
  async handleProductInfoClick(event) {
    const button = event.target; // Button that triggered the modal
    const id = button.dataset.id; // Extract info from data-* attributes
    const product = await this.productService.getProductById(id);
    const modal = document.querySelector('#productInfoModal');
    const productImg = modal.querySelector('.modal-body .card-img-top');
    productImg.setAttribute('src', 'img/products/' + product.image);
    productImg.setAttribute('alt', product.title);
    modal.querySelector('.modal-body .card-title').innerText = product.title;
    modal.querySelector('.modal-body .card-text').innerText =
      product.description;
    const btnBuy = modal.querySelector('button.buy');
    btnBuy.innerText = `Замовити`;
    btnBuy.dataset.id = id;
  }
  handleProductBuyClick(event) {
    const button = event.target;
    const id = button.dataset.id;
    this.cart.addProduct(id);
    window.showAlert('Product added to cart');
  }
}