import style from './style.module.css';

export function BoxColor(props) {
  const color = `rgb(${props.r},${props.g},${props.b})`;
  const hex =
    props.r.toString(16) + props.g.toString(16) + props.b.toString(16);
  return (
    <div style={{ backgroundColor: color }} className={style.textBox}>
      <p>
        rgb({props.r},{props.g},{props.b})
      </p>
      <p>#{hex}</p>
    </div>
  );
}
