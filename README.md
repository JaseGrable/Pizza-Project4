# Pizza Parlor Website

#### By Jase Grable

#### Epicodus Project 4

## Technologies Used

- Git
- CSS
- HTML
- VScode
- LearnHowToProgram.com
- javascript

## Description

- This is a website that I built for my coding bootcamp at Epicodus. The goal of the project is to use Object-Oriented-Programming to build a pizza order form. The order form allows for the choice of one or more toppings, the choice of a size, and an output of the final cost based on these choices. The website was built with test driven development practice and separation of business and user logic.

## Setup/Installation Requirements

- Clone this repository to your desktop
- Navigate to top level directory
- open index.html in your browser
- pick your pizza toppings
- click submit
- receive cost

## Known Bugs

- no known current bugs

## License

MIT

Copyright (c) Jase Grable

### Test Driven Development

- Describe: Pizza()

-- Test: "It should return a pizza object with two properties for toppings and size"  
Code: const myPizza = new Pizza( "2", "medium")
Expected Output: Pizza {toppings:"2", size: "medium"}

- Describe: Pizza.prototype.toppingsCost = function ()
  -- Test: "It Should calculate the cost based on amount of toppings selected for pizza"
  --- Code: const myPizza = new Pizza (["pepperoni", "mushroom", "olives"], "large")
  --- const toppingCost = myPizza.toppingCost()
  --- console.log(toppingCost);
  -- Expected Output: 9

- Describe: sizeCost()
  Test: "It should calculate cost based on size customer selected"
  Code:

- Describe: calculateTotalCost()
  Test: "It should return the combined cost of the pizza based on size and topping choice"
  Code:
