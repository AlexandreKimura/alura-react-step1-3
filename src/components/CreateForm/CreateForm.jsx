import { useEffect } from "react";
import { useState } from "react";
import { DeliveryData } from "./DeliveryData";
import { PersonalData } from "./PersonalData";
import { UserData} from "./UserData";
import { Typography, Stepper, Step , StepLabel} from "@material-ui/core";

export function CreateForm({ toSend}) {

  const [currentStep, setCurrentStep] = useState(0);

  const [dataForms, setDataForms] = useState({});

  useEffect(() => {
    if(currentStep === forms.length) {
      toSend(dataForms)
    }
  })

  const forms = [
    <UserData toSend={saveData}/>,
    <PersonalData toSend={saveData}/>, 
    <DeliveryData toSend={saveData}/>,
    <Typography variant="h5">Usuário cadastrado!</Typography>
  ];

  function saveData(data) {
    setDataForms({ ...dataForms, ...data });
    nextStep();
  }

  function nextStep() {
    setCurrentStep(currentStep + 1);
  }

  return(
    <>
      <Stepper activeStep={currentStep}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Finalizado</StepLabel></Step>
      </Stepper>
      { forms[currentStep]}
    </>
  )
}