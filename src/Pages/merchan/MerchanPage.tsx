import React, { useEffect, useState } from 'react'
import { IProducto } from '../../Components/interfaces/IProductos'
import { getProductos, newProducto } from '../../Components/firebase/FBPr'
import { useForm } from 'react-hook-form'
import { Button, Grid, TextField } from '@mui/material'

export const MerchanPage = () => {
  const [productos, setProductos] = useState<IProducto[]>([])
  useEffect(()=> {
    getProductos()
      .then(res => {
        console.log(...res)
        setProductos([...res])
      })
  },[])

  const { register, handleSubmit, formState: { errors } } = useForm<IProducto>();

  const onAddProducto = (dataProducto: IProducto) => {
    newProducto(dataProducto)
  };




  return (
    <>
        <Grid container sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Grid item xs={5} sx={{ backgroundColor: '#F3F3', margin: '10px', padding: '12px', height: '35vh', borderRadius: '20px' }}>
            <h2 id='NewCat'>Listado de Productos</h2>
            {
              productos.map((producto) => (
                <>
                  <li key={producto.name}>
                    <span>{producto.name}</span>
                    <span>{producto.precio}</span>
                  </li>
                </>
              ))
            }
          </Grid>
          <Grid item xs={5} sx={{ backgroundColor: 'lightgray', margin: '10px', padding: '12px', height: '28vh', borderRadius: '20px' }}>
            <h2 id='NewCat'>Añadir nuevo Producto</h2>
            <form action="" onSubmit={handleSubmit(onAddProducto)} noValidate>
                <TextField 
                { ...register('name')}
                id='nombre'
                label='Nombre'
                type='text'
                sx={{width: '70%', margin:'5px'}}
                >
                </TextField>
                <TextField 
                { ...register('precio')}
                id='precio'
                label='precio'
                type='string'
                sx={{width: '20%'}}
                >
                </TextField>
                <Button type='submit' variant="contained" sx={{marginTop: '10px'}}>Añadir Producto</Button>            
            </form>
            
          </Grid>
        </Grid>
      </>
  )
}

export default MerchanPage;