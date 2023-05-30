

import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import './login.css'
import { NavLink } from 'react-router-dom'
import { BackEndPage } from '../backend/BackEndPage'
import path from 'path'




export const LoginPage = () => {
    return (
        <Grid className='formulario' item xs={5} sx={{ backgroundColor: 'lightgray', margin: '10px', padding: '12px', borderRadius: '20px' }}>
            <h2 id='NewCat'>Login</h2>
            <form className='form' >
                <TextField
                    // required
                    id='Correo'
                    label='Correo electronico'
                    placeholder='Hola@gmail.com'
                    type='text'
                    autoComplete="off"
                    color="warning"
                    variant="filled"
                >
                </TextField>
                <TextField
                    // required
                    id='contraseña'
                    label='Contraseña'
                    type='password'
                    autoComplete="off"
                    variant="filled"
                    color="warning"
                >
                </TextField>
                <NavLink to='/tabla'>
                    <Button className='botonform' type='submit' variant="contained" sx={{ marginTop: '10px' }}>
                        Iniciar Sesión
                    </Button>
                </NavLink>
            </form>

        </Grid>
    )
}
