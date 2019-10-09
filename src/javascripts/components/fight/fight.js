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

const fightBuilder = () => {
  let domString = `
  <div>
    <div class='fightTitle'>
      <h1>Fight</h1> 
    </div>
    <div class='row'></div>
  </div>`;
  addColor();
  domString += createfightButton(fights);
  utilities.printToDom('fight', domString);
};


export default { fightBuilder };
