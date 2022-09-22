import React, {useEffect} from 'react'
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Name({ formData, setForm, navigation }) {
    const { firstName, lastName, email, password } = formData;
     const [error, setError] = React.useState({});
     const [isSubmit, setIsSubmit] = React.useState(false);

    const handleValidation = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/;
      if(!values.email){
        errors.email = "Email is required";
      }else if(!regex.test(values.email)){
          errors.email = "Email is not valid";
        }
      
      if (!values.firstName) {
        errors.firstName = "FirstName is required!";
      }
      if (!values.lastName) {
        errors.lastName = "LastName is required!";
      }
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 6) {
        errors.password = "Password must be more than 6 characters";
      } else if (values.password.length > 20) {
        errors.password = "Password cannot exceed more than 20 characters";
      } else if (!pattern.test(values.password)) {
        errors.password =
          "Password must contain at least one uppercase, one lowercase, one numeric and one special character";
      }
      return errors;
    }

     const handlenext = (e) => {
      e.preventDefault();
      setError( handleValidation(formData))
      setIsSubmit(true);
    };
    useEffect(() => {
      console.log(error);
      if (Object.keys(error).length === 0 && isSubmit) {
        console.log(formData);
        navigation.next();
      }
    }, [error]);

  return (
    <div>
      <Container>
        <h1>Personal Details</h1>
        <TextField
        label="First Name"
        name="firstName"
        value={firstName}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <p style ={{color :'#ff0033'}}>{error.firstName}</p>
      <TextField
        label="Last Name"
        name="lastName"
        value={lastName}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <p  style ={{color :'#ff0033'}}>{error.lastName}</p>
      <TextField
        label="Email"
        name="email"
        value={email}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <p  style ={{color :'#ff0033'}}>{error.email}</p>
        <TextField
        label="Password"
        name="password"
        value={password}
        onChange={setForm}
        type="password"
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <p  style ={{color :'#ff0033'}}>{error.password}</p>
      <Button
        variant="contained"
        fullWidth
        color="primary"
        style={{ marginTop: "1rem" }}
        onClick={handlenext}
      >
        Next
      </Button>
      </Container>
      
    </div>
  )
}

export default Name