class ShoppingBasket {
  constructor() {
    this.basket = []
  }

  addItem(item) {
    this.basket.push(item);
  }

  getTotalPrice() {
    let total = 0;
    this.basket.forEach(item => total += item.getPrice());
    return total;
  }
}

module.exports = ShoppingBasket;