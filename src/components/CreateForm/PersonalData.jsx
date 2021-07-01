import React, { useState, useContext } from 'react';
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";
import Validators from '../../contexts/Validators';
import useErrors from '../../hooks/useErrors';

export function PersonalData({ toSend }) {
  
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cpf, setCpf] = useState("");
  const [promotions, setPromotions] = useState(true);
  const [news, setNews] = useState(true);
  
  const validators = useContext(Validators);

  const[errors, validFields, withoutErrors] = useErrors(validators);

  return(
    <form onSubmit={(event) => {
      event.preventDefault();
      if(withoutErrors()) {
        toSend({name, lastName, cpf, promotions, news})
      }
    }}>
      <TextField 
        value={name}
        name="name"
        onChange={(event) => {
          setName(event.target.value);
        }} 
        onBlur={validFields}
        error={!errors.name.valid}
        helperText={errors.name.text}
        id="nome" 
        label="Nome" 
        variant="outlined" 
        fullWidth 
        margin="normal">
      </TextField>

      <TextField 
        value={lastName}
        name="lastname"
        onChange={(event) => {
          setLastName(event.target.value);
        }} 
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal">
      </TextField>

      <TextField
        value={cpf}
        name="cpf"
        onChange={(event) => {
          setCpf(event.target.value);
        }} 
        onBlur={validFields}
        error={!errors.cpf.valid}
        helperText={errors.cpf.text}
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal">
      </TextField>

      <FormControlLabel 
        label="Promoções" 
        control={<Switch onChange={(event) => {
          setPromotions(event.target.checked)
        }}
        checked={promotions}
        name="promotions"
        color="primary"
        label=""></Switch>}>  
      </FormControlLabel>
      
      <FormControlLabel 
        label="Novidades" 
        control={<Switch onChange={(event) => {
          setNews(event.target.checked)
        }}
        checked={news}
        name="news"
        color="primary"
        label=""></Switch>}>
      </FormControlLabel>

      <Button type="submit" variant="contained" color="primary">Próximo</Button>
    </form>
  )
}