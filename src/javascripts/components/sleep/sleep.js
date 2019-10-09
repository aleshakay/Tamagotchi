import './sleep.scss';
import utilities from '../../helpers/utilities';

const sleeps = [
  {
    id: 'nap',
    points: 50,
  },
  {
    id: 'sleep',
    points: 60,
  },
];

const addColor = () => {
  document.getElementById('sleep').classList.add('pull-right');
};

const createSleepButton = () => {
  let domString = '<div id="sleepbtnSection">';
  for (let i = 0; i < sleeps.length; i += 1) {
    const sleep = sleeps[i];
    domString += `
    <button id="${sleep.id}" class="sleep-button sleep-button-${sleep.id}">
      <div>${sleep.id}</div>
    </button>
  `;
  }
  domString += '</div>';
  return domString;
};

const sleepBuilder = () => {
  let domString = `
  <div>
    <div class='sleepTitle'>
      <h1>Sleep</h1> 
    </div>
    <div class='row'></div>
  </div>`;
  addColor();
  domString += createSleepButton(sleeps);
  utilities.printToDom('sleep', domString);
};

export default { sleepBuilder };
