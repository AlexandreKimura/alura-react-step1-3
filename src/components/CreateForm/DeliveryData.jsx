import React from 'react';
import { TextField, Button } from "@material-ui/core";
import { useState } from 'react';

export function DeliveryData({ toSend }) {

  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      toSend({ cep, address, number, state, city })
    }}>
      <TextField
        value={cep}
        onChange={(event) => {
          setCep(event.target.value)
        }}
        id="cep"
        label="CEP"
        type="text"
        variant="outlined"
        margin="normal">
      </TextField>

      <TextField
        value={address}
        onChange={(event) => {
          setAddress(event.target.value)
        }}
        id="address"
        label="Endereço"
        type="text"
        variant="outlined"
        fullWidth
        margin="normal">
      </TextField>

      <TextField
        value={number}
        onChange={(event) => {
          setNumber(event.target.value)
        }}
        id="number"
        label="Número"
        type="number"
        variant="outlined"
        margin="normal">
      </TextField>

      <TextField
        value={state}
        onChange={(event) => {
          setState(event.target.value)
        }}
        id="state"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal">
      </TextField>

      <TextField
        value={city}
        onChange={(event) => {
          setCity(event.target.value)
        }}
        id="city"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal">
      </TextField>

      <Button type="submit" variant="contained" color="primary" fullWidth>Finalizar Cadastro</Button>
    </form>
  )
}