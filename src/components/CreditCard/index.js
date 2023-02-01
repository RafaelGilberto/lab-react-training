import style from './style.module.css';
import masterCard from '../../assets/images/mastercard.png';
import visa from '../../assets/images/visa.png';

export function CreditCard(props) {
  let image;
  let altText = 'card type';
  let cardNumber = props.number.slice(12, 16);
  if (props.type == 'Visa') {
    image = visa;
  } else {
    image = masterCard;
  }
  return (
    <div
      style={{ backgroundColor: `${props.bgColor}`, color: `${props.color}` }}
      className={style.boxCard}
    >
      <img src={image} alt={altText} className={style.imageSize} />
      <p className={style.number}>{cardNumber}</p>
      <p className={style.validade}>
        Expires {props.expirationMonth}/
        {JSON.stringify(props.expirationYear).slice(2, 4)}
        <span> {props.bank}</span>
      </p>
      <p className={style.owner}>{props.owner}</p>
    </div>
  );
}
