import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  // entrada, rodando, fim
  const [estado, setEstado] = useState("entrada");

  //palpites da maquina
  //entre 0 e 300
  const [palpite, setPalpite] = useState(150);

  const [numPapites, setNumPalpites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("rodando");
    setMin(0);
    setMax(300);
    setNumPalpites(1);
    setPalpite(150);
  };

  if (estado === "entrada") {
    return (
      <div className="App">
        <p>
          Pense em um número entre {min} e {max} que vamos tentar advinhar!
        </p>
        <button className="ButtonIniciar" onClick={iniciarJogo}>
          Vamos lá!
        </button>
      </div>
    );
  }
  const menor = () => {
    setNumPalpites(numPapites + 1);
    setMax(palpite);
    const proximoPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proximoPalpite);
  };
  const maior = () => {
    setNumPalpites(numPapites + 1);
    setMin(palpite);
    const proximoPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proximoPalpite);
  };
  const acertou = () => {
    setEstado("fim");
  };
  if (estado === "fim") {
    return (
      <div className="App">
        <p>JOGO ENCERRADO!</p>
        <p>
          Acertei o número {palpite} com {numPapites} palpite(s)
        </p>
        <button className="ButtonIniciar" onClick={iniciarJogo}>
          Jogar Novamente!
        </button>
      </div>
    );
  }
  return (
    <div className="App">
      <p>
        Mín: {min} | Máx: {max}
      </p>
      <p> o seu número é: {palpite} ?</p>
      <button className="ButtonMenor" onClick={menor}>
        MENOR
      </button>
      <button className="ButtonAcertou" onClick={acertou}>
        ACERTOU
      </button>
      <button className="ButtonMaior" onClick={maior}>
        MAIOR
      </button>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
