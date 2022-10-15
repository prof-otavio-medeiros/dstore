export const Header = (props) => {
    //
    // desestruturação
    //
    const {title, age} = props; // const title = props.title;
    //
    // 'props' é 'read only' -> gera erro de execução
    //
    // props.title = 'Não Funciona';
    //
    return (
      <h1>{title} - ({age})</h1>
    )
  }