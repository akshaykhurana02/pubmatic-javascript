// import logo from "./logo.svg";
import "./App.css";
import moment from 'moment';

export function Pubmatic() {
  return (
    <>
      <div className="App">Pubmatic's JS Training</div>
      <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
    </>
  );
}

export default Pubmatic;
