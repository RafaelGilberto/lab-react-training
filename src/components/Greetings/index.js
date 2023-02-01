import style from './style.module.css';
export function Greetings(props) {
  let comprimento = '';
  switch (props.lang) {
    case 'en':
      comprimento = 'Hello';
      break;
    case 'fr':
      comprimento = 'Bonjour';
      break;
    case 'de':
      comprimento = 'Hallo';
      break;
    case 'es':
      comprimento = 'Hola';
      break;
  }
  return (
    <p className={style.greet}>
      {comprimento} {props.children}
    </p>
  );
}
