import useForm from "./useForm";
import Cards from "react-credit-cards";
import "bootstrap/dist/css/bootstrap.min.css";
import "./payment.css";
import "react-credit-cards/es/styles-compiled.css";
import { Container } from '@mui/material'
import React from 'react'
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

function Payment({ formData, setForm, navigation }) {
  const {card}=formData;
  const [error, setError] = React.useState({});
  const [isSubmit, setIsSubmit] = React.useState(false);
  const [focusCVV, setFocusCVV] = React.useState(false);
  
  const handlenext = (e) => {
    e.preventDefault(e);
    setError(handleValidation(formData))
    setIsSubmit(true);
  };

  const handleValidation = (values) => {
    const errors = {};
    console.log( values.card.cardExpiration.length);
    if(!values.card.cardNumber){
      errors.cardNumber = "Card Number is required";
    } else if(values.card.cardNumber.length < 16){
      errors.cardNumber = "Card Number is not valid";
    }
    if(!values.card.cardHolderName){
      errors.cardHolderName = " Name is required";
    }
    if(!values.card.cardExpiration){
      errors.cardExpiry = "Expiry Date is required";
    }
    else if(values.card.cardExpiration.length === 5){
      if(values.card.cardExpiration.slice(0,2) < 1 || values.card.cardExpiration.slice(0,2) > 12){
        errors.cardExpiry = "Expiry Month is not valids";
      } else if(values.card.cardExpiration.slice(3,5) < 21 || values.card.cardExpiration.slice(3,5) > 35){
        errors.cardExpiry = "Expiry Year is not valids";
      }
   
    }
    else{
      if(values.card.cardExpiration.slice(0,2) < 1 || values.card.cardExpiration.slice(0,2) > 12){
        errors.cardExpiry = "Expiry Month is not valid";
      } else if(values.card.cardExpiration.slice(3,7) < 2021 || values.card.cardExpiration.slice(3,7) > 2035){
        errors.cardExpiry = "Expiry Year is not valid";
      }
    }
    
    
    if(!values.card.cardCvv){
      errors.cardCvv = "CVC is required";
    }else if(values.card.cardCvv.length < 3 || values.card.cardCvv.length > 4){  
      errors.cardCvv = "CVC is not valid";
    }
    return errors;
  }

  const handleFocus = (e) => {
      card({ ...card, focus:true });
  };

  React.useEffect(() => {
    console.log(error);
    if (Object.keys(error).length === 0 && isSubmit) {
      console.log(formData);
      navigation.next();
    }
  }, [error]);


  return (
    <div>
      <div className="container">
        <div className="box justify-content-center align-items-center">
          <div className="formDiv">
          <div className="creditCard">
          <Cards
            cvc={card.cardCvv}
            expiry={card.cardExpiration}
            name={card.cardHolderName}
            number={card.cardNumber}
            flipped={focusCVV}
          />
          </div>
          <Container maxWidth="xs">
      <h3>Card Details</h3>
      
      <TextField
        label="Card Number"
        name="card.cardNumber"
        type="number"
        value={card.cardNumber}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <p style ={{color :'#ff0033'}}>{error.cardNumber}</p>
      <TextField
        label="Card Holder Name"
        name="card.cardHolderName"
        value={card.cardHolderName}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <p style ={{color :'#ff0033'}}>{error.cardHolderName}</p>
      <TextField
        label="Valid Till"
        name="card.cardExpiration"
        type="dates"
        value={card.cardExpiration}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <p style ={{color :'#ff0033'}}>{error.cardExpiry}</p>
      <TextField
        label="CVV"
       type="password"
        name="card.cardCvv"
        value={card.cardCvv}
        onChange={setForm}
        onBlur={() => setFocusCVV(false)}
        onFocus={() => setFocusCVV(true)}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <p style ={{color :'#ff0033'}}>{error.cardCvv}</p>
     
      <div style={{ marginTop: "1rem" }}>
        <Button
          color="secondary"
          variant="contained"
          style={{ marginRight: "1rem" }}
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={handlenext}
        >
          Next
        </Button>
      </div>
    </Container>
          
        
      </div>
      </div>
      </div>
    </div>
  )
}

export default Payment