import utilities from '../helpers/utilities.js.js';

const breads = [
    {id:"bread1", name:"cheese", price: 100},
    {id:"bread2", name:"garlic", price: 90},
    {id:"bread3", name:"white", price: 80},
    {id:"bread4", name:"wheat", price: 85},
    {id:"bread5", name:"lettuce", price: 100},
];

const getSelectedBreads = () => {
    const selectedBreads = [];
    //get all bread checkboxes
    const breadCheckboxes = document.getElementsByClassName('bread');
    //keep the checked ones in a new array
    for (let j = 0; j < breadCheckboxes.length; j++){
        for (let k = 0; k < breads.length; k++){
            if(breadCheckboxes[j].checked && breadCheckboxes[j].id === breads[k].id){
                selectedBreads.push(breads[k]);
            }
        }
    }
    //return the new array
    return selectedBreads;
};

const printBreadOptions = () => {
    let domString = '';
    for (let i = 0; i < breads.length; i++){
    domString +=  `<div class="form-group form-check">
    <input type="checkbox" class="form-check-input bread" id=${breads[i].id}>
    <label class="form-check-label" for=${breads[i].id}>${breads[i].name}</label>
    </div>
    `;
    }

    utilities.printToDom('bread-counter', domString);
};

export default { printBreadOptions, getSelectedBreads };