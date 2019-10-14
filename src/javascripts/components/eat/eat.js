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

let full = 100;

const addingHealthyFood = () => {
  document.getElementById('apples').addEventListener('click', () => {
    const healthy = full + 10;
    if (healthy > 100) {
      full = 100;
    } else {
      full = healthy;
    }
    document.getElementById('myBar').setAttribute('style', `width: ${full}%`);
  });
};

const addingSnackFood = () => {
  document.getElementById('cookies').addEventListener('click', () => {
    full -= 3;
    document.getElementById('myBar').setAttribute('style', `width:${full}%`);
  });
};

const bar = () => {
  document.getElementById('myBar').value = full;
  full -= 10;
};

const eatBuilder = () => {
  let domString = `
  <div>
    <div class='eatTitle'>
      <h1>Eat</h1> 
    </div>
    <div class='row'></div>
  </div>
  <div id="progress-container">
    <div id="myProgress">
      <div id="myBar" class="quad-bar" style="width: ${full}%"></div>
    </div>
  </div>`;
  addColor();
  domString += createHeathButton(foods);
  utilities.printToDom('eat', domString);
};


export default {
  eatBuilder,
  addingHealthyFood,
  addingSnackFood,
  bar,
};
