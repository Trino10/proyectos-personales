import React, { useEffect, useState } from 'react'
import { IProducto } from '../../Components/interfaces/IProductos'
import { getProductos, newProducto } from '../../Components/firebase/FBPr'
import { useForm } from 'react-hook-form'
import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardActions, CardContent, Grid, TextField, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './merchan.css'
export const MerchanPage = () => {
  const [productos, setProductos] = useState<IProducto[]>([])
  useEffect(() => {
    getProductos()
      .then(res => {
        console.log(...res)
        setProductos([...res])
      })
  }, [])

  const { register, handleSubmit, formState: { errors } } = useForm<IProducto>();

  const onAddProducto = (dataProducto: IProducto) => {
    newProducto(dataProducto)
  };




  return (
    <>
      <Grid container sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Grid className='tabla'  sx={{ margin: '10px', padding: '12px', borderRadius: '20px' }}>
          <h1 className='NewCat'>Listado de Productos</h1>
          {
            productos.map((producto) => (
              <>
                <React.Fragment>
                  <CardContent className='tarjeta'>
                    <Typography>
                      <img  className='imagen' src={producto.foto} />
                    </Typography>
                    <Typography>
                      <h2 className='nombre'>
                        {producto.name}
                      </h2>
                    </Typography>
                    <Typography>
                      <h2 className='modelo'>
                        {producto.modelo}
                      </h2>
                    </Typography>
                    <Typography>
                      <h3 className='precio'>
                        {producto.precio}
                      </h3>
                    </Typography>
                    <Typography>
                      <h5 className='talla'>
                        Talla: {producto.talla}
                      </h5>
                    </Typography>
                    <Typography>
                      <p className='desc'>
                        {producto.descripcion}
                      </p>
                    </Typography>
                    <Button type='submit' variant="contained" sx={{ marginTop: '10px' }}>Comprar</Button>
                  </CardContent>
                </React.Fragment>
              </>
            ))
          }
        </Grid>
      </Grid>
    </>
  )
}

export default MerchanPage;