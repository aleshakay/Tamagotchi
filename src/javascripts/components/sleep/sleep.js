import './sleep.scss';
import utilities from '../../helpers/utilities';

const sleeps = [
  {
    id: 'nap',
    points: 50,
  },
  {
    id: 'zzzz',
    points: 60,
  },
];

const addColor = () => {
  document.getElementById('sleep').classList.add('pull-right');
};

let energy = 50;

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

const moreEnergy = () => {
  document.getElementById('zzzz').addEventListener('click', () => {
    const rested = energy + 60;
    if (rested > 100) {
      energy = 100;
    } else {
      energy = rested;
    }
    document.getElementById('sleepBar').setAttribute('style', `width: ${energy}%`);
  });
};

const lessEnergy = () => {
  document.getElementById('nap').addEventListener('click', () => {
    energy += 50;
    document.getElementById('sleepBar').setAttribute('style', `width:${energy}%`);
  });
};

const sleepingbar = () => {
  document.getElementById('sleepBar').value = energy;
  energy -= 1;
  const sleepByTime = () => {
    setInterval(sleepingbar, 20000);
  };
  sleepByTime();
};

const sleepBuilder = () => {
  let domString = `
  <div>
    <div class='sleepTitle'>
      <h1>Sleep</h1> 
    </div>
    <div class='row'></div>
  </div>
  <div id="progress-container">
    <div id="myProgress">
      <div id="sleepBar" class="quad-bar" style="width: ${energy}%"></div>
    </div>
  </div>`;
  addColor();
  domString += createSleepButton(sleeps);
  utilities.printToDom('sleep', domString);
};

export default {
  sleepBuilder,
  moreEnergy,
  lessEnergy,
  sleepingbar,
};
