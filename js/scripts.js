//Business Logic 

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

  //UI Logic
  Pizza.prototype.totalCost = function () {
    const toppingsCost = this.toppingsCost();
    const sizeCost = this.sizeCost();
    const totalCost = toppingsCost + sizeCost;
    return totalCost
  }

  document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("pizzaForm");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        document.getElementById("showBill").style.display = "block"; 

    const inputtedName = document.getElementById("name").value 
    const inputNoToppings = parseInt(document.getElementById("noToppings").value);
    
    let toppingArray = [];
    const checkboxes = document.querySelectorAll("input[name=toppingCheck]:checked");
    checkboxes.forEach(function(checkbox) {
        const inputtedToppings = checkbox.value;
        toppingArray.push(inputtedToppings);
        document.getElementById("displayToppings").textContent += inputtedToppings + ",";
    });

    const inputtedSize = document.querySelector("input[name=sizePizza]:check").value;
    document.getElementById("displayName").textContent = inputtedName; 
    document.getElementById("displaySize").textContent = inputtedSize; 

    const pizza = new Pizza(toppingArray, inputtedSize);
    
    const toppingsCost = pizza.toppingsCost(); 
    const sizeCost = pizza.sizeCost(); 
    const totalCost = pizza.totalCost();
    document.getElementById("displayTotalCost").innerHTML = totalCost; 

    });
  });