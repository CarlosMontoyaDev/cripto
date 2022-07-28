import React, { useState, useEffect } from 'react';
 
import Formulario from "./componentes/Formulario";
import Resultado from './componentes/Resultado';
import Spinner from './componentes/Spinner';
import GraficaBarras from './componentes/GraficasBarras';

import './App.css'

 


function App() {

  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado] = useState({});
  const [cargango, setCargango] = useState(false)





  useEffect(() => {
    if (Object.keys(monedas).length > 0) {

      const cotizarCripto = async () => {
        setCargango(true)
        setResultado({})





        const { moneda, criptomoneda } = monedas;
        const urlPrecios = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

        const respuesta = await fetch(urlPrecios)
        const resultado = await respuesta.json()
        setTimeout(() => {
          setResultado(resultado.DISPLAY[criptomoneda][moneda])
          setCargango(false)


        }, 3000);
      }


      cotizarCripto()
    }
  }, [monedas])



  console.log(resultado);


  return (

<>
    <div className='contenedor'>

      <h1 className='title'>Cotizador de <span>Criptomonedas</span> </h1>


      <div className='principal'>

        <div className='formulario '>
          <Formulario
            monedas={monedas}
            setMonedas={setMonedas}
            />
        </div>

        

        <div className='spinner'>
        {cargango && <Spinner />}
        {resultado.PRICE && <Resultado resultado={resultado} />}
        </div>

        <div className='graficas'>
          <GraficaBarras />

        </div>
      </div>

      




    </div>

    <div className='saber-mas'>
        <div className='box'>

        <h2>¿Qué son las criptomonedas y cómo funcionan?</h2>
        </div>

        <div className='box' >
           
          <p>Una criptomoneda es un activo digital que emplea un cifrado criptográfico para garantizar su titularidad y asegurar la integridad de las transacciones, y controlar la creación de unidades adicionales, es decir, evitar que alguien pueda hacer copias como haríamos, por ejemplo, con una foto.</p>
        </div>
        </div>


            </>
  );
}

export default App;
