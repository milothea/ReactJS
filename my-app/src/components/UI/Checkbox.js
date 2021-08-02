import './Checkbox.css';

function Checkbox(props) {
  return <input className={props.className} type={props.type} onChange={props.onChange} />;
}

export default Checkbox;

