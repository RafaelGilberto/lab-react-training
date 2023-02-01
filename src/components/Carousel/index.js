import style from './style.module.css';
import { useState } from 'react';

export function Carousel(props) {
  //const [pic, setPic] = useState(props.images[0]);
  const altText = 'Person picture';
  const [count, setCount] = useState(0);
  const [pic, setPic] = useState(props.images[count]);
  return (
    <div>
      <img src={pic} alt={altText} className={style.imgFeature} />
      <div>
        <button
          onClick={() => {
            setCount(count - 1);
            if (count === 0) {
              setCount(3);
            }
            setPic(props.images[count]);
          }}
          className={style.buttonFeatures}
        >
          Left
        </button>
        <button
          onClick={() => {
            setCount(count + 1);
            if (count === 3) {
              setCount(0);
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
