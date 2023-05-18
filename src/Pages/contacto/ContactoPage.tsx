import React, { useEffect, useState } from 'react'
import { IProducto } from '../../Components/interfaces/IProductos'
import { getProductos, newProducto } from '../../Components/firebase/FBPr'
import { useForm } from 'react-hook-form'
import { Button, Grid, TextField } from '@mui/material'
import './backend.css'
import SendIcon from '@mui/icons-material/Send';
export const ContactoPage = () => {
  const [productos, setProductos] = useState<IProducto[]>([])
  useEffect(() => {
    getProductos()
      .then(res => {
        console.log(...res)
        setProductos([...res])
      })
  }, [])

  const { register, handleSubmit, formState: { errors } } = useForm<IProducto>();

  const onAddProducto = async (dataProducto: IProducto) => {
    await newProducto(dataProducto)
    window.location.reload();
  };



  return (
    <>
      <Grid className='formulario' item xs={5} sx={{ backgroundColor: 'lightgray', margin: '10px', padding: '12px', borderRadius: '20px' }}>
        <h2 id='NewCat'>Añadir nuevo Producto</h2>
        <form className='form' action="" onSubmit={handleSubmit(onAddProducto)} noValidate>
          <TextField
            {...register('foto')}
            id='foto'
            label='Foto'
            placeholder='Url de la foto...'
            type='text'
            autoComplete="off"
            color="warning"
            variant="filled"
          // sx={{width: '20%'}}
          >
          </TextField>
          <TextField
            {...register('name')}
            required
            id='nombre'
            label='Nombre'
            type='text'
            // style={{border: "1px solid white"}}
            autoComplete="off"
            variant="filled"
            color="warning"
          // sx={{width: '70%', marginRight:'15px'}}
          >
          </TextField>
          <TextField
            {...register('modelo')}
            required
            id='modelo'
            label='Modelo'
            type='text'
            // style={{border: "1px solid white"}}
            autoComplete="off"
            variant="filled"
            color="warning"
          // sx={{width: '70%', marginRight:'15px'}}
          >
          </TextField>
          <TextField
            {...register('precio')}
            required
            id='precio'
            label='Precio'
            type='text'
            placeholder='€'
            autoComplete="off"
            color="warning"
            variant="filled"
          // sx={{width: '20%'}}
          >
          </TextField>
          
          <TextField
            {...register('talla')}
            required
            id='talla'
            label='Talla'
            placeholder='XL,L,M...'
            type='text'
            autoComplete="off"
            color="warning"
            variant="filled"
          // sx={{width: '20%'}}
          >
          </TextField>
          <TextField
            {...register('color')}
            required
            id='color'
            label='Color'
            placeholder='Rojo, verde...'
            type='text'
            autoComplete="off"
            color="warning"
            variant="filled"
          // sx={{width: '20%'}}
          >
          </TextField>
          <TextField
            {...register('descripcion')}
            id='descripcion'
            label='Descripcion'
            placeholder='Descibe el producto...'
            multiline
            rows={2} //darle altura al label
            type='text'
            autoComplete="off"
            color="warning"
            variant="filled"
          // sx={{width: '20%', height: '40%'}}
          >
          </TextField>
          <Button type='submit' variant="contained" sx={{ marginTop: '10px' }} endIcon={<SendIcon />}>
            Send
          </Button>
          {/* <Button type='submit' variant="contained" sx={{ marginTop: '10px' }}>Añadir Producto</Button> */}
        </form>

      </Grid>
    </>
  )
}
