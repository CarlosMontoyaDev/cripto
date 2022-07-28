import React, {useState} from 'react'
import styled from "@emotion/styled";

const Label = styled.label`
color: white;
display: block;
font-family: 'lato', sans-serif;
font-size: 20px;
font-weight: 700;
margin: 15px 0;
`

const Select = styled.select`
color: black;
width: 100%;
display: block;
padding: 14px ;
border-radius: 10px;
font-family: 'lato', sans-serif;
font-weight: 700;
margin: 15px 0;
`

const useSelectMonedas = (label, opciones) => {

    const [state, setState] = useState('')

  
    const SelectMonedas = () => (
         <>
             <Label>{label}</Label>
             <Select 
             value={state}
             onChange={ (e) => setState(e.target.value)}
             >

                 <option value="">Seleccionar</option>
                {opciones.map( opcion => (
                    <option key={opcion.id} value={opcion.id}>{opcion.nombre}</option>
                ))}
                
             </Select>
         </>
    )
    return [ state, SelectMonedas]
}

export default useSelectMonedas