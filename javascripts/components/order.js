import cheese from './cheese.js';
import meat from './meat.js';
import veggie from './veggie.js';
import bread from './bread.js';
import condiment from './condiment.js';
import utilities from '../helpers/utilities.js';


const createFinalOrder = (items) => {
    const total = items.reduce((prev, curr) => prev + curr.price, 0);
    let domString2 = '';
    for (let i = 0; i < items.length; i++){
        domString2 += `<p>${items[i].name} $${(items[i].price/100).toFixed(2)}</p>`;
    }
    domString2 += `<h6>Final Price: $${(total/100).toFixed(2)}</h6>`
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
    const domString = '<button id="order-button" class="btn btn-success">Make Sammich</button> <button class="btn btn-primary" value="Refresh Page" onClick="window.location.reload();">Clear</button>';
    utilities.printToDom('click-order', domString);
    document.getElementById('order-button').addEventListener('click', createOrderEvent);
};

export default { printOrderButton };