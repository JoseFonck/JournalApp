import { Google } from "@mui/icons-material"
import { Button, Grid, TextField, Typography, Link } from "@mui/material"
import { Link as RouterLink} from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"

export const LoginPage = () => {
  return (
      <AuthLayout title='Login'>
        <form>
          <Grid container>
            <Grid item xs={12} sx={{ mt:2 }}>
              <TextField
                placeholder="correo@google.com"
                label='Correo'
                type="email"
                fullWidth
                />
            </Grid>
            <Grid item xs={12} sx={{ mt:2 }}>
              <TextField 
                placeholder="Password"
                label='Contraseña'
                type="password"
                fullWidth
              />
            </Grid>
            <Grid container spacing={2} sx={{mt:.2}}>
              <Grid item>
                <Button variant='contained'>Login</Button>
              </Grid>
              <Grid item>
                <Button variant="contained">
                  <Google/>
                  <Typography >oogle</Typography>
                </Button>
              </Grid>

            </Grid>


          </Grid>

          <Grid container direction='row' justifyContent='end'>
           
            <Link component={RouterLink} color='inherit' to='/auth/register'>Crear una cuenta</Link> 

          </Grid>
        </form>
      
    </AuthLayout>
  )
}
