import style from './style.module.css';

export function Rating(props) {
  let starNumber = Math.round(props.children);
  let starOutput = '';
  for (let i = 0; i < starNumber; i++) {
    starOutput += '★';
  }
  if (starOutput.length < 6) {
    for (let i = starOutput.length; i < 5; i++) {
      starOutput += '☆';
    }
  }
  return <p className={style.star}>{starOutput}</p>;
}
