import './fight.scss';
import utilities from '../../helpers/utilities';
import foods from '../data/eatHealth';

const addColor = () => {
  document.getElementById('fight').classList.add('pull-left_bottom');
};

const fightBuilder = () => {
  let domString = `
  <div>
    <div class='fightTitle'>
      <h1>Fight</h1> 
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
  utilities.printToDom('fight', domString);
};


export default { fightBuilder };
