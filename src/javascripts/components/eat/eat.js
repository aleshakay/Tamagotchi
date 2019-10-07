import './eat.scss';
import utilities from '../../helpers/utilities';
import foods from '../data/eatHealth';

const addColor = () => {
  document.getElementById('eat').classList.add('pull-left');
};
const eatBuilder = () => {
  let domString = `
  <div>
    <div class='eatTitle'>
      <h1>Eat</h1> 
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
  utilities.printToDom('eat', domString);
};


export default { eatBuilder };
