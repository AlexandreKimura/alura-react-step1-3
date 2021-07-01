
import { CreateForm } from '../src/components/CreateForm/CreateForm';
import { Container, Typography } from '@material-ui/core';
import "fontsource-roboto";

import { validCPF, validPassword } from '../src/models/validate';
import Validators from './contexts/Validators';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">Formulário</Typography>
      <Validators.Provider value={{ cpf:validCPF, password: validPassword, name: validPassword }}>
        <CreateForm toSend={toSend}/>
      </Validators.Provider>
    </Container>
  );
}

function toSend(data) {
  console.log(data);
}

export default App;
