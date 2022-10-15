import { useCallback, useState } from "react";

export const Header = (props) => {
  let naoAltera = 'naoAltera ORIGINAL';
  const changeVar = () => {
    naoAltera = 'naoAltera ALTERADO';
    let x = 0;
  }
  console.log(`Header -> naoAltera = ${naoAltera}`);
  //
  // desestruturação
  //
  const { title, age } = props; // const title = props.title;
  //
  // 'props' é 'read only' -> gera erro de execução
  //
  // props.title = 'Não Funciona';
  //
  const [titleAge, setTitleAge] = useState(age);
  const checkAge = () => {
    if (age > 50) {
      setTitleAge('Tu é Velho, Cara!!');
    }
  }
  return (
    <>
      <h1 onClick={checkAge}>{title} - ({titleAge})</h1>
      <h2 onClick={changeVar}>Não atualiza</h2>
    </>
  )
}