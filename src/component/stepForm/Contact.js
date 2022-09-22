import React from 'react'
import { Container } from '@mui/material'
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

function Contact({ formData, setForm, navigation }) {
  const { phone, email } = formData;

  return (
    <Container maxWidth="xs">
      <h3>Contact</h3>
      <TextField
        label="Phone"
        name="phone"
        value={phone}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="E-Mail"
        name="email"
        value={email}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
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
          onClick={() => navigation.next()}
        >
          Next
        </Button>
      </div>
    </Container>
  )
}

export default Contact