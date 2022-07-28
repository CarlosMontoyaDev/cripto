import { Bar } from "react-chartjs-2";

import React, { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

 
const options = {
  fill: true,
  animated: true,
  Responive: true,

  Plugins: {
    title: {
      display: true,
      text: "Precio Cripto ultimas 24 horas",
    },
    Legend: {
      position: "top",
    },
  },

  scales: {
    y: {
      min: 0,
      max: 50,
    },
  }
};

const GraficaBarras = () => {
  const [nombres, setNombres] = useState([]);
  const [precios, setPrecios] = useState([]);

  const consultaApi = async () => {
    const url =
      "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=20&tsym=USD";

    const resp = await fetch(url);
    const resultado = await resp.json();

    let arrayNombres = [];
    let arrayPrecios = [];

      resultado.Data.map((nom) => {
      arrayNombres.push(nom.CoinInfo.Name);
      arrayPrecios.push(nom.RAW.USD.PRICE);
    });

    setNombres(arrayNombres);
    setPrecios(arrayPrecios);
  };

  useEffect(() => {
    consultaApi();
  }, []);

  const data = {

    labels: nombres,

    datasets: [
      {
        label: "Cripto Monedas",
        data: precios,
        borderColor: "black",
        backgroundColor: [
          "#80a8f8",
          "#ccd8d9",
          "#efd244",
          "#dc8bd6",
          "#f74e16",
          "#0e5cf8",
          "#2ff629",
          "#d5e94f",
          "#686b6f",
          "#f40000",
        ],
        borderRadius:10,
      },
    ],
  };

  return (
    <div className="bar">
      <h1 className="title-graficas">Cotización en tiempo real</h1>
      <Bar data={data} options={options} />
    </div>
  );
};

export default GraficaBarras;
