import '../styles/main.scss';
import eat from './components/eat/eat';
import fight from './components/fight/fight';
import sleep from './components/sleep/sleep';
import play from './components/play/play';


const init = () => {
  eat.eatBuilder();
  sleep.sleepBuilder();
  fight.fightBuilder();
  play.playBuilder();
};
init();
