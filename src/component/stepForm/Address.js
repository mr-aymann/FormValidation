import { Container } from '@mui/material'
import React from 'react'
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

function Address({ formData, setForm, navigation }) {
  const { address, city, state, zip ,phone} = formData;
  const [error, setError] = React.useState({});
  const [isSubmit, setIsSubmit] = React.useState(false);

  const handlenext = (e) => {
    e.preventDefault();
    setError( handleValidation(formData))
    setIsSubmit(true);
  };

  const handleValidation = (values) => {
    const errors = {};
    const regex= /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if(!values.address){
      errors.address = "Address is required";
    }
    
    if(!values.city) {
      errors.city = "City is required";
    }
    if(!values.state) {
      errors.state = "State is required";
    }
    if(!values.zip) {
      errors.zip = "Zip is required";
    }
    if(!values.phone) {
      errors.phone = "Phone is required";
    }else if(!regex.test(values.phone)){
      errors.phone = "Phone is not valid";
    }
    return errors;
  }

  React.useEffect(() => {
    console.log(error);
    if (Object.keys(error).length === 0 && isSubmit) {
      console.log(formData);
      navigation.next();
    }
  }, [error]);


  return (
      <Container maxWidth="xs">
      <h3>Address</h3>
      <TextField
        label="Phone"
        name="phone"
        type="number"
        value={phone}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <p style ={{color :'#ff0033'}}>{error.phone}</p>
      <TextField
        label="Address"
        name="address"
        value={address}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <p style ={{color :'#ff0033'}}>{error.address}</p>
      <TextField
        label="City"
        name="city"
        value={city}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <p style ={{color :'#ff0033'}}>{error.city}</p>
      <TextField
        label="State"
        name="state"
        value={state}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <p style ={{color :'#ff0033'}}>{error.state}</p>
      <TextField
        label="Zip"
        name="zip"
        type="number"
        value={zip}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <p style ={{color :'#ff0033'}}>{error.zip}</p>
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
    
  )
}

export default Address