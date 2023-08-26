import React from "react";

function App() {

  //variáveis
  const name: string = "Paulo";
  const age: number = 30;
  const isWorking: boolean = false;

  return (
    <div className="App">
      <h1>Typescript com React</h1>
      <h2>nome: {name}</h2>
      <p>idade: {age}</p>
      {isWorking && <p>Está trabalhando</p>}
    </div>
  );
}

export default App;
