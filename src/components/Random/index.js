import style from './style.module.css';

export function Random(props) {
  const randomNumber = Math.floor(
    Math.random() * (props.max - props.min) + props.min
  );
  return (
    <p className={style.random}>
      Random value between {props.min} and {props.max} {'=>'} {randomNumber}
    </p>
  );
}
