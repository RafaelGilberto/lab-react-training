import style from './style.module.css';
import { Rating } from '../../components/Rating';

export function DriverCard(props) {
  let ratingNumber = Math.round(props.rating);
  let altTextImg = 'Owner name';
  return (
    <div className={style.cardStyle}>
      <div>
        <img src={props.img} alt={altTextImg} className={style.imageFeature} />
      </div>
      <div className={style.cardInfo}>
        <h1 className={style.title}>{props.name}</h1>
        <p className={style.star}>
          <Rating>{ratingNumber}</Rating>
        </p>
        <p className={style.carModel}>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}
