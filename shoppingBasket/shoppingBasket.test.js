const ShoppingBasket = require('./shoppingBakets')

describe('ShoppingBasket', () => {
  it('returns the total price of the basket', () => {
    let basket = new ShoppingBasket;
    expect(basket.getTotalPrice()).toEqual(0);
  })
  it('adds an item to the basket and returns the price', () => {
    const candyDouble = { getPrice: () => 2.99 }
    const candyDouble2 = { getPrice: () => 1.00 }
    const basket = new ShoppingBasket();
    basket.addItem(candyDouble);
    basket.addItem(candyDouble2);
    expect(basket.getTotalPrice()).toEqual(3.99);
  })
})

