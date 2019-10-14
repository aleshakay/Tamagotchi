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

let fun = 50;

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

const sporting = () => {
  document.getElementById('sports').addEventListener('click', () => {
    const balling = fun + 50;
    if (balling > 100) {
      fun = 100;
    } else {
      fun = balling;
    }
    document.getElementById('playBar').setAttribute('style', `width: ${fun}%`);
  });
};

const playdoll = () => {
  document.getElementById('dolls').addEventListener('click', () => {
    fun += 2;
    document.getElementById('playBar').setAttribute('style', `width:${fun}%`);
  });
};

const playBuilder = () => {
  let domString = `
  <div>
    <div class='playTitle'>
      <h1>Play</h1> 
    </div>
  <div class='row'></div>
  </div>
  <div id="progress-container">
    <div id="myProgress">
      <div id="playBar" class="quad-bar" style="width: ${fun}%"></div>
    </div>
  </div>`;
  addColor();
  domString += createplayButton(plays);
  utilities.printToDom('play', domString);
};


export default {
  playBuilder,
  sporting,
  playdoll,
};
