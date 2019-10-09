import './play.scss';
import utilities from '../../helpers/utilities';


const addColor = () => {
  document.getElementById('play').classList.add('pull-right');
};

const playBuilder = () => {
  const domString = `
  <div>
    <div class='playTitle'>
      <h1>Play</h1> 
    </div>
    <div class='row'></div>
  </div>`;
  addColor();
  utilities.printToDom('play', domString);
};


export default { playBuilder };
