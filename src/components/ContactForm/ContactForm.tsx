import React from 'react';
import { Grid, Typography } from '@mui/material';
import Input from '../Input/Input';
import Button from '../Button/Button';

type ContactFormProps = {
};

const ContactForm:React.FC<ContactFormProps> = () => {

  return (
    <div> 
      <Grid>
            <Typography gutterBottom variant="h5">
              Contáctenos
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Envíe un mensaje y nuestro equipo se contactará con usted.
          </Typography> 
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <Input label="Nombre" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <Input label="Apellido" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Input type="email" label="Email" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Input type="number" label="Teléfono" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Input label="Mensaje" multiline rows={4} fullWidth required />
                </Grid>
                <Grid item xs={12} className="flex justify-center items-center">
                  <Button>Enviar</Button>
                </Grid>

              </Grid>
            </form>
      </Grid>
    </div>
  );
}

export default ContactForm;