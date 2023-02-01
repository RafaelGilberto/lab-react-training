import React, { useState } from 'react';
import style from './style.module.css';

export function LikeButton() {
  const btnColors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [likes, setCount] = useState(0);
  const randomNumber = Math.round(Math.random() * btnColors.length);
  return (
    <div>
      <button
        onClick={() => {
          setCount(likes + 1);
        }}
        className={style.likeButton}
        style={{ backgroundColor: `${btnColors[randomNumber]}` }}
      >
        {likes} Likes
      </button>
    </div>
  );
}
