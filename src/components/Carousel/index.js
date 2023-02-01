import style from './style.module.css';
import { useState } from 'react';

export function Carousel(props) {
  const [pic, setPic] = useState(props.images[0]);
  const altText = 'Person picture';
  let count = 0;
  return (
    <div>
      <img src={pic} alt={altText} className={style.imgFeature} />
      <div>
        <button
          onClick={() => {
            count--;
            if (count === -1) {
              count = 3;
            }
            setPic(props.images[count]);
          }}
          className={style.buttonFeatures}
        >
          Left
        </button>
        <button
          onClick={() => {
            count++;
            if (count === 3) {
              count = 0;
            }
            setPic(props.images[count]);
          }}
          className={style.buttonFeatures}
        >
          Right
        </button>
      </div>
    </div>
  );
}
