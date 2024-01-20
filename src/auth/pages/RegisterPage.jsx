import { Google } from "@mui/icons-material"
import { Button, Link, Grid, TextField, Typography } from "@mui/material"
import { Link as RouterLink} from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"



export const RegisterPage = () => {
    return (
      <AuthLayout title="Register">
          <form>
            <Grid container>
              <Grid item xs={12} sx={{ mt:2 }}>
                <TextField
                  placeholder="Your name"
                  label='Nombre completo'
                  type="text"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sx={{ mt:2 }}>
                <TextField 
                  placeholder="Password"
                  label='Email'
                  type="correo@google.com"
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
                <Grid item xs={12}>
                  <Button variant='contained' fullWidth>Create Account</Button>
                </Grid>  
              </Grid>
  
            </Grid>
  
            <Grid container direction='row' justifyContent='end' sx={{ mt: 1 }}>
              <Typography sx={{ mr: 1 }}>Ya tienes cuenta?</Typography>
              <Link component={RouterLink} color='inherit' to='/auth/login'>Ingresar</Link> 
  
            </Grid>
  
          </form>
          </AuthLayout>
)
}
