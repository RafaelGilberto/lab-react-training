import style from './style.module.css';
import emptyDice from '../../assets/images/dice-empty.png';
import dice1 from '../../assets/images/dice1.png';
import dice2 from '../../assets/images/dice2.png';
import dice3 from '../../assets/images/dice3.png';
import dice4 from '../../assets/images/dice4.png';
import dice5 from '../../assets/images/dice5.png';
import dice6 from '../../assets/images/dice6.png';
import { useState } from 'react';

export function Dice() {
  const [dice, setDice] = useState(emptyDice);
  const altText = 'Dice image';
  const diceWarehouse = [dice1, dice2, dice3, dice4, dice5, dice6];
  let randomNumber = Math.round(Math.random() * (diceWarehouse.length - 1));

  return (
    <img
      onClick={() => {
        setTimeout(() => {
          setDice(diceWarehouse[randomNumber]);
        }, 1000);
        setDice(emptyDice);
      }}
      src={dice}
      alt={altText}
      className={style.diceFeatures}
    />
  );
}
