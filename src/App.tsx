import { useState } from "react";
import { Matriz } from "./components/Matriz";

function App() {
  const [matrizInput, setMatrizInput] = useState("");

  const [matrizResultado, setMatrizResultado] = useState<string[][]>([[]]);
  const [matrizOriginal, setMatrizOriginal] = useState<string[][]>([[]]);

  const handleRotation = () => {
    if (!matrizInput) {
      alert("Debes ingresar una matriz");
      return;
    }

    try {
      const matriz = JSON.parse(matrizInput);
      if (!Array.isArray(matriz)) {
        alert("El elemento ingresado no es una matriz");
        return;
      }
      // Número de filas
      const n = matriz.length;

      for (let i = 0; i < n; i++) {
        // Verifica que cada fila sea matriz valida y tenga la misma cantidad de columnas
        if (!Array.isArray(matriz[i]) || matriz[i].length !== n) {
          alert("Debes ingresar una matriz NxN");
          return;
        }
      }
      setMatrizOriginal(matriz);

      const rotatedMatriz = matriz.map((_, i) =>
        matriz.map((_, j) => matriz[j][n - 1 - i])
      );
      setMatrizResultado(rotatedMatriz);
    } catch (error) {
      console.log(error);
      alert("Debes ingresar una matriz válida");
    }
  };

  return (
    <div className="flex flex-col items-center m-12">
      <h1 className="text-blue-950 text-4xl font-semibold">
        Rotación 90° matriz NxN
      </h1>
      <div className="my-5">
        <label htmlFor="matrizInput" className="font-bold">
          JSON Matriz Input:{" "}
        </label>
        <input
          className="border px-2 py-1 ml-2"
          type="text"
          placeholder="Ingrese una matriz NxN"
          id="matrizInput"
          value={matrizInput}
          onChange={(e) => setMatrizInput(e.target.value)}
        />
      </div>
      <button
        className="py-2 px-12 rounded-lg border bg-blue-600 text-white font-semibold hover:bg-blue-700"
        onClick={handleRotation}
      >
        Rotar
      </button>
      {matrizResultado && (
        <div className="flex flex-row my-4">
          <Matriz label="Matriz ingresada" matriz={matrizOriginal} />
          <Matriz label="Resultado" matriz={matrizResultado} />
        </div>
      )}
    </div>
  );
}

export default App;
