import React from 'react'
import { useForm, useStep } from "react-hooks-helper";
import  Name from "./stepForm/Name";
import  Address  from "./stepForm/Address";
import  Contact  from "./stepForm/Contact";
import  Review  from "./stepForm/Review";
import  Submit from "./stepForm/Submit";
import  Payment from "./stepForm/Payment/Payment";

const defaultData = {
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "", 
    card :{
        cardNumber : "",
        cardHolderName : "",
        cardExpiration : "",
        cardCvv : "",
        focus : ""
    }  
  }

  const steps = [
    { id: "names" },
    { id: "address" },
    { id: "payment" },
    { id: "review" },
    { id: "submit" },
  ];

function Userform() {

    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({
      steps,
      initialStep: 0,
    });

    const props = { formData, setForm, navigation };

    switch (step.id) {
        case "names":
          return <Name {...props} />;
        case "address":
          return <Address {...props} />;
        case "contact":
          return <Contact {...props} />;
          case "payment":
            return <Payment {...props} />;
        case "review":
          return <Review {...props} />;
        case "submit":
          return <Submit {...props} />;
          default :
            return <div>Not Found</div>
      }

  return (
    <div>Userform</div>
  )
}

export default Userform