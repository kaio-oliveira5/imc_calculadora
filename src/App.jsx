import { useState } from "react";
import "./App.css";

function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcularIMC = (e) => {
    e.preventDefault();

    if (!altura || !peso) return;

    const alturaMetros = altura / 100;
    const imc = peso / (alturaMetros * alturaMetros);
    const imcFormatado = imc.toFixed(2);

    let classificacao = "";

    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 24.9) classificacao = "Peso normal";
    else if (imc < 29.9) classificacao = "Sobrepeso";
    else if (imc < 34.9) classificacao = "Obesidade Grau I";
    else if (imc < 39.9) classificacao = "Obesidade Grau II";
    else classificacao = "Obesidade Grau III";

    setResultado({ imc: imcFormatado, classificacao });
  };

  return (
    <div className="container">
      <h1>Calculadora de IMC</h1>

      <form onSubmit={calcularIMC}>
        <div className="campo">
          <label>Altura (cm)</label>
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Ex: 170"
          />
        </div>

        <div className="campo">
          <label>Peso (kg)</label>
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Ex: 70"
          />
        </div>

        <button type="submit">Calcular IMC</button>
      </form>

      {resultado && (
        <div className="resultado">
          <h2>Resultado</h2>
          <p><strong>IMC:</strong> {resultado.imc}</p>
          <p><strong>Classificação:</strong> {resultado.classificacao}</p>
        </div>
      )}
    </div>
  );
}

export default App;
