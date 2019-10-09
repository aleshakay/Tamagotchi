import './eat.scss';
import utilities from '../../helpers/utilities';


const foods = [
  {
    id: 'cookies',
    points: 3,
  },
  {
    id: 'apples',
    points: 10,
  },
];

const addColor = () => {
  document.getElementById('eat').classList.add('pull-left');
};

const createHeathButton = () => {
  let domString = '<div id="eatbtnSection">';
  for (let i = 0; i < foods.length; i += 1) {
    const food = foods[i];
    domString += `
    <button id="${food.id}" class="food-button food-button-${food.id}">
      <div>${food.id}</div>
    </button>
  `;
  }
  domString += '</div>';
  return domString;
};

const eatBuilder = () => {
  let domString = `
  <div>
    <div class='eatTitle'>
      <h1>Eat</h1> 
    </div>
    <div class='row'></div>
  </div>`;
  addColor();
  domString += createHeathButton(foods);
  utilities.printToDom('eat', domString);
};


export default { eatBuilder };
