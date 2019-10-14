import './play.scss';
import utilities from '../../helpers/utilities';

const plays = [
  {
    id: 'sports',
    points: 50,
  },
  {
    id: 'dolls',
    points: 2,
  },
];

const addColor = () => {
  document.getElementById('play').classList.add('pull-right');
};

const createplayButton = () => {
  let domString = '<div id="playbtnSection">';
  for (let i = 0; i < plays.length; i += 1) {
    const play = plays[i];
    domString += `
    <button id="${play.id}" class="play-button play-button-${play.id}">
      <div>${play.id}</div>
    </button>
  `;
  }
  domString += '</div>';
  return domString;
};

const playBuilder = () => {
  let domString = `
  <div>
    <div class='playTitle'>
      <h1>Play</h1> 
    </div>
    <div class='row'></div>
  </div>`;
  addColor();
  domString += createplayButton(plays);
  utilities.printToDom('play', domString);
};


export default { playBuilder };
