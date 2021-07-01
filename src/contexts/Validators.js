import React from "react";

const Validators = React.createContext({ 
  cpf:defaultValidator,
  password: defaultValidator,
  name: defaultValidator,
});

function defaultValidator(data) {
  return {valid: true, text: ""}
}

export default Validators