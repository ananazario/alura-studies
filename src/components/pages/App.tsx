import { ITarefa } from "../../types/tarefa";
import Cronometro from "../Cronometro";
import Form from "../Form";
import List from "../Lista";
import style from './App.module.scss';
import { useState } from 'react';

function App() {

  const [tarefas, setTarefas] = useState< ITarefa[] | [] >([])

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
