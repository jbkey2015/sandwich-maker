import bread from './components/bread.js';
import meat from './components/meat.js';
import cheese from './components/cheese.js';
import veggie from './components/veggie.js';
import condiment from './components/condiment.js';

const init = () => {
    bread.printBreadOptions();
    meat.printMeatOptions();
    cheese.printCheeseOptions();
    veggie.printVeggieOptions();
    condiment.printCondimentOptions();
};

init()