import style from './style.module.css';

export function IdCard(props) {
  const height = props.height / 100;
  return (
    <div className={style.card}>
      <img src={props.picture} className={style.cardimg} />
      <div>
        <p className={style.infocard}>
          <strong>First name: </strong>
          {props.firstName}
        </p>
        <p className={style.infocard}>
          <strong>Last name: </strong>
          {props.lastName}
        </p>
        <p className={style.infocard}>
          <strong>Gender: </strong>
          {props.gender}
        </p>
        <p className={style.infocard}>
          <strong>Height: </strong>
          {height}m
        </p>
        <p className={style.infocard}>
          <strong>Birth: </strong>
          {JSON.stringify(props.birth).slice(1, 11)}
        </p>
      </div>
    </div>
  );
}
