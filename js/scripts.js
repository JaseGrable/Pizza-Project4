function Pizza(toppings, size) {
    this.toppings = toppings;
    this.size = size;
  }
  
  Pizza.prototype.toppingsCost = function () {
    if (this.toppings.length !== 0) {
      let toppingPrice = this.toppings.length * 3;
      return toppingPrice;
    } else {
      alert("Please choose your toppings.");
    }
  };