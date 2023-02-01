import style from './style.module.css';
import maxGlasses from '../../assets/images/maxence-glasses.png';
import max from '../../assets/images/maxence.png';
import { useState } from 'react';

export function ClickablePicture() {
  const [picture, setPicture] = useState(max);
  const altText = 'Max picture';

  return (
    <img
      src={picture}
      className={style.imgFeatures}
      alt={altText}
      onClick={() => {
        if (picture === max) {
          setPicture(maxGlasses);
        } else {
          setPicture(max);
        }
      }}
    />
  );
}
