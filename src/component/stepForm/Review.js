import React from 'react'
import { cardActionAreaClasses, Container } from '@mui/material'
import {Button} from '@mui/material'
import {Accordion} from '@mui/material'
import {AccordionSummary} from '@mui/material'
import {AccordionDetails} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { ListItemText } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';


function Review({ formData, navigation }) {
  const { go } = navigation;
  const {
    firstName,
    lastName,
    nickName,
    address,
    city,
    state,
    zip,
    phone,
    email,
    card
  } = formData;
  return (
    <Container maxWidth='sm'>
    <h3>Review</h3>
    <RenderAccordion summary="Names" go={ go } details={[
      { 'First Name': firstName },
      { 'Last Name': lastName },
      { 'Email': email },

    ]} />
    <RenderAccordion summary="Address" go={ go } details={[
      { 'Address': address },
      { 'City': city },
      { 'State': state },
      { 'Zip': zip },
      { 'Phone': phone },
    ]} />
   
     <RenderAccordion summary="Payment" go={ go } details={[
     { 'Card Number': card.cardNumber },
     { 'Card Holder Name': card.cardHolderName },
     { 'Card Expiry': card.cardExpiration },
    ]} />
    <Button
      color="primary"
      variant="contained"
      style={{ marginTop: '1.5rem' }}
      onClick={() => go('submit')}
    >
      Submit
    </Button>

  </Container>
  )
}

export const RenderAccordion = ({ summary, details, go }) => (
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
    >{summary}</AccordionSummary>
    <AccordionDetails>
      <div>
        { details.map((data, index) => {
          const objKey = Object.keys(data)[0];
          const objValue = data[Object.keys(data)[0]];

          return <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>

        }) }
        <IconButton
          color="primary"
          component="span"
          onClick={() => go(`${summary.toLowerCase()}`)}
        ><EditIcon /></IconButton>
      </div>
    </AccordionDetails>
  </Accordion>
)

export default Review