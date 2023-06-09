import React, { useEffect, useState } from 'react'
import { IProducto } from '../../Components/interfaces/IProductos'
import { getProductos, newProducto } from '../../Components/firebase/FBPr'
import { useForm } from 'react-hook-form'
import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardActions, CardContent, Grid, TextField, Typography, colors } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './merchan.css'
import fondo from '../../img/camuflaje.jpg'
import grafi from '../../img/texto.png'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';




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
        <Grid className='tabla' sx={{ margin: '10px', padding: '12px', borderRadius: '20px' }}>
          <h1 className='graffiti-text'>Catálogo de productos</h1>
          {
            productos.map((producto) => (
              <>
                <React.Fragment>
                  <CardContent className='tarjeta'>
                    <Typography>
                      <h2 className='nombre'>
                        {producto.name}<span className='corazon'><FavoriteIcon/></span>
                      </h2>
                    </Typography>
                    <Typography>
                      <h2 className='modelo'>
                        {producto.modelo}
                      </h2>
                    </Typography>
                    <Typography>
                      <h2 className='precio'>
                      {producto.precio}€
                      </h2>
                    </Typography>
                    <Typography>
                      <img className='imagen' src={producto.foto} />
                    </Typography>
                    <Typography>
                      <h2 className='talla'>
                        Talla: {producto.talla}
                      </h2>
                    </Typography>
                    <Typography>
                      <p className='desc'>
                        {producto.descripcion}
                      </p>
                    </Typography>
                    <Button className='adproducto' type='submit' variant="contained" sx={{ marginTop: '10px', background: 'black' }}>
                      Añadir al carrito
                      <FontAwesomeIcon icon={faCartShopping} beatFade style={{ color: "#ffffff", }} />
                    </Button>
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