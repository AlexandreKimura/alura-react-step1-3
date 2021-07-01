import { useState } from "react";

function useErrors(validators) {

  const initialState = createInitialState(validators);

  const [errors, setErrors] = useState(initialState);

  function validFields(event) {
    const { name, value } = event.target;
    const newState = {...errors}
    newState[name] = validators[name](value);

    setErrors(newState);
  }

  function withoutErrors() {

    for(let index in errors) {
      if(!errors[index].valid) {
        return false;
      }
    }

    return true;
  }
  
  return [errors, validFields, withoutErrors];
}

function createInitialState(validators) {
  const initialState = {}
  for(let field in validators) {
    initialState[field] = { valid:true, text: "" } 
  }

  return initialState;
}

export default useErrors;