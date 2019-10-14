import './fight.scss';
import utilities from '../../helpers/utilities';

const fights = [
  {
    id: 'push',
    points: 10,
  },
  {
    id: 'run',
    points: 1,
  },
];

const addColor = () => {
  document.getElementById('fight').classList.add('pull-left_bottom');
};

let strength = 100;

const createfightButton = () => {
  let domString = '<div id="fightbtnSection">';
  for (let i = 0; i < fights.length; i += 1) {
    const fight = fights[i];
    domString += `
    <button id="${fight.id}" class="fight-button fight-button-${fight.id}">
      <div>${fight.id}</div>
    </button>
  `;
  }
  domString += '</div>';
  return domString;
};

const runAway = () => {
  document.getElementById('run').addEventListener('click', () => {
    const alive = strength + 1;
    if (alive > 100) {
      strength = 100;
    } else {
      strength = alive;
    }
    document.getElementById('fightBar').setAttribute('style', `width: ${strength}%`);
  });
};

const pushing = () => {
  document.getElementById('push').addEventListener('click', () => {
    strength -= 10;
    document.getElementById('fightBar').setAttribute('style', `width:${strength}%`);
  });
};

const bar = () => {
  document.getElementById('fightBar').value = strength;
  strength -= 7;
  const fightByTime = () => {
    setInterval(bar, 20000);
  };
  fightByTime();
};

const fightBuilder = () => {
  let domString = `
  <div>
    <div class='fightTitle'>
      <h1>Fight</h1> 
    </div>
    <div class='row'></div>
  </div>
  <div id="progress-container">
    <div id="myProgress">
      <div id="fightBar" class="quad-bar" style="width: ${strength}%"></div>
    </div>
  </div>`;
  addColor();
  domString += createfightButton(fights);
  utilities.printToDom('fight', domString);
};


export default {
  fightBuilder,
  pushing,
  runAway,
  bar,
};
