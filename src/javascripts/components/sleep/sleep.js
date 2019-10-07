import './sleep.scss';
import utilities from '../../helpers/utilities';
import foods from '../data/eatHealth';

const addColor = () => {
  document.getElementById('sleep').classList.add('pull-right');
};

const sleepBuilder = () => {
  let domString = `
  <div>
    <div class='sleepTitle'>
      <h1>Sleep</h1> 
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
  utilities.printToDom('sleep', domString);
};

export default { sleepBuilder };
