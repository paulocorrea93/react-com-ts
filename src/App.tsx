import React from "react";

function App() {

  //variáveis
  const name: string = "Paulo";
  const age: number = 30;
  const isWorking: boolean = false;

  //funções

  const userGreeting = (name: string) => {
    return `olá ${name}`
  }

  return (
    <div className="App">
      <h1>Typescript com React</h1>
      <h2>nome: {name}</h2>
      <p>idade: {age}</p>
      {isWorking && <p>Está trabalhando</p>}
      <h3>{userGreeting(name)}</h3>
      {/* <h3>{userGreeting(age)}</h3> NÃO FUNCIONA PORQUE O PARAMETRO ACEITO DEVE SER STRING */}
    </div>
  );
}

export default App;
