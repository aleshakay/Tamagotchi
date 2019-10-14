import '../styles/main.scss';
import eat from './components/eat/eat';
import fight from './components/fight/fight';
import sleep from './components/sleep/sleep';
import play from './components/play/play';


const init = () => {
  eat.eatBuilder();
  eat.addingHealthyFood();
  eat.addingSnackFood();
  eat.bar();
  sleep.sleepBuilder();
  sleep.bar();
  sleep.lessEnergy();
  sleep.moreEnergy();
  fight.fightBuilder();
  play.playBuilder();
};
init();
