import bread from './components/bread.js.js';
import meat from './components/meat.js.js';
import cheese from './components/cheese.js.js';
import veggie from './components/veggie.js.js';
import condiment from './components/condiment.js.js';
import order from './components/order.js.js';

const init = () => {
    bread.printBreadOptions();
    meat.printMeatOptions();
    cheese.printCheeseOptions();
    veggie.printVeggieOptions();
    condiment.printCondimentOptions();
    order.printOrderButton();
};

init()