import cheese from './cheese.js';
import meat from './meat.js';
import veggie from './veggie.js';
import bread from './bread.js';
import condiment from './condiment.js';
import utilities from '../helpers/utilities.js';


const createFinalOrder = (items) => {
    let domString2 = '';
    for (let i = 0; i < items.length; i++){
        domString2 += `<h2>${items[i].name}</h2>`;
    }
    utilities.printToDom('final-order', domString2)
}

const createOrderEvent = () => {
    const selectedCheeses = cheese.getSelectedCheeses();
    const selectedMeats = meat.getSelectedMeats();
    const selectedVeggies = veggie.getSelectedVeggies();
    const selectedBreads = bread.getSelectedBreads();
    const selectedCondiments = condiment.getSelectedCondiments();
    const finalSammich = selectedCheeses.concat(selectedMeats, selectedVeggies, selectedBreads, selectedCondiments);
    createFinalOrder(finalSammich);
}

const printOrderButton = () => {
    const domString = '<button id="order-button" class="btn btn-secondary">Make Sammich</button>';
    utilities.printToDom('click-order', domString);
    document.getElementById('order-button').addEventListener('click', createOrderEvent);
};

export default { printOrderButton };