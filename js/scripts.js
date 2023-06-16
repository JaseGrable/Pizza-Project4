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

  Pizza.prototype.sizeCost = function () {
    if (this.size === "Small") {
        return 10; 
    } else if (this.size === "Medium") {
        return 12; 
    } else if (this.size === "Large") {
        return 14
    } else {
        alert ("Please select a size that you would prefer")
    }
  }