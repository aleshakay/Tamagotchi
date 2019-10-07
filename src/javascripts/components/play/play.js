import './play.scss';
import utilities from '../../helpers/utilities';
import foods from '../data/eatHealth';


const addColor = () => {
  document.getElementById('play').classList.add('pull-right');
};

const playBuilder = () => {
  let domString = `
  <div>
    <div class='playTitle'>
      <h1>Play</h1> 
    </div>
    <div class='row'></div>
  </div>`;
  for (let i = 0; i < foods.length; i += 1) {
    domString += `
        <div id='unhealthybtn'>
          <button class="cookies">${foods.id}</Button>
        </div>
      `;
  }
  addColor();
  utilities.printToDom('play', domString);
};


export default { playBuilder };
