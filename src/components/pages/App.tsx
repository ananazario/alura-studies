import Cronometro from "../Cronometro";
import Form from "../Form";
import List from "../Lista";
import style from './App.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <Cronometro />
    </div>
  );
}

export default App;
