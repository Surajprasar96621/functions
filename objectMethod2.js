function createCart(productNames, quantities, prices) {
    const cartData = productNames.map((name, index) => ({
      name,
      quantity: quantities[index],
      price: prices[index],
    }));
  
    return {
      data: cartData,
      total() {
        return this.data.reduce((acc, item) => acc + (item.quantity * item.price), 0);
      },
    };
  }
  const cart = createCart(["Rice", "Dal", "Salt"], [2, 3, 1], [60, 50, 20]);
  console.log(cart.total()); 
  