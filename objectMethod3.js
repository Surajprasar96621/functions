function calculateSalesTotals(sales) {
    return sales.map(item => {
      const discount = item.discount || 0; 
      const salePrice = item.original * (1 - discount);
      const total = salePrice * item.stock;
      return {
        ...item,
        sale: salePrice.toFixed(2), 
        total: total.toFixed(2), 
      };
    });
  }
  