import React, { useState, useContext } from 'react';
import { TextField, Button } from "@material-ui/core";
import Validators from '../../contexts/Validators';
import useErrors from "../../hooks/useErrors";

export function UserData({ toSend }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validators = useContext(Validators);

  const [errors, validFields, withoutErrors] = useErrors(validators);

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if(withoutErrors()) {
        toSend({ email, password });
      }
    }}>
      <TextField
        value={email}
        name="email"
        onChange={(event) => {
          setEmail(event.target.value)
        }}
        id="email"
        label="E-mail"
        type="email"
        variant="outlined"
        fullWidth
        required
        margin="normal">
      </TextField>

      <TextField
        value={password}
        name="password"
        onChange={(event) => {
          setPassword(event.target.value)
        }}
        error={!errors.password.valid}
        helperText={errors.password.text}
        onBlur={validFields}
        id="password"
        label="Senha"
        type="password"
        variant="outlined"
        fullWidth
        required
        margin="normal">
      </TextField>
      
      <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
    </form>
  )
}