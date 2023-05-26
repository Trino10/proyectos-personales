import React, { useEffect, useState } from 'react';
import { styled } from '@mui/system';
import TablePagination, {tablePaginationClasses as classes,} from '@mui/base/TablePagination';
import { IProducto } from '../../Components/interfaces/IProductos';
import './tabla.css'
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { deleteProducto, getProductos } from '../../Components/firebase/FBPr';

export default function UnstyledTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [productos, setProductos] = useState<IProducto[]>([]);
  useEffect(() => {
    getProductos().then((res) => {
      console.log(...res);
      setProductos([...res]);
    });
  }, []);

  return (
    <Root>
      <TableContainer className='tabla1'>
        <Table aria-label="custom pagination table">
          <TableHead className='cabecera'>
            <TableRow>
              <TableCell>
                <h3>Marca</h3>
              </TableCell>
              <TableCell>
                <h3>Modelo</h3>
              </TableCell>
              <TableCell>
                <h3>Precio</h3>
              </TableCell>
              <TableCell>
                <h3>Talla</h3>
              </TableCell>
              <TableCell>
                <h3>Color</h3>
              </TableCell>
              <TableCell>
                <h3>Descripcion</h3>
              </TableCell>
              <TableCell>
                <h3>Borrar</h3>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? productos.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : productos
            ).map((producto) => (
              <TableRow key={producto.codigo}>
                <TableCell>{producto.name}</TableCell>
                <TableCell align="left">{producto.modelo}</TableCell>
                <TableCell align="left">{producto.precio}</TableCell>
                <TableCell align="left">{producto.talla}</TableCell>
                <TableCell align="left">{producto.color}</TableCell>
                <TableCell align="left">{producto.descripcion}</TableCell>
                <TableCell align="right">
                <Button onClick={() => producto.codigo && deleteProducto(producto.codigo)} id='deletebtn2' endIcon={<FontAwesomeIcon icon={faTrash} />}></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CustomTablePagination
        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
        colSpan={12}
        count={productos.length}
        rowsPerPage={rowsPerPage}
        page={page}
        slotProps={{
          select: {
            'aria-label': 'Filas por página',
          },
          actions: {
            showFirstButton: true,
            showLastButton: true,
          },
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Root>
  );
}

// Estilos

const Root = styled('div')({
  maxWidth: '100%',
  overflowX: 'auto', // Permitir desplazamiento horizontal si el contenido se desborda
});

const TableContainer = styled('div')({
  maxWidth: '100%',
  overflowY: 'auto', // Permitir desplazamiento vertical si el contenido se desborda
});

const Table = styled('table')(({ theme }) => ({
  fontFamily: 'IBM Plex Sans, sans-serif',
  fontSize: '0.875rem',
  borderCollapse: 'collapse',
  width: '100%',
}));

const TableHead = styled('thead')(({ theme }) => ({}));

const TableBody = styled('tbody')(({ theme }) => ({}));

const TableRow = styled('tr')(({ theme }) => ({}));

const TableCell = styled('td')(({ theme }) => ({
  textAlign: 'left',
  padding: '6px',
}));

const CustomTablePagination = styled(TablePagination)(({ theme }) => ({
  '& .${classes.spacer}': {
    display: 'none',
  },

  '& .${classes.toolbar}': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '10px',

    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  },

  '& .${classes.selectLabel}': {
    margin: 0,
  },

  '& .${classes.select}': {
    padding: '2px',
    borderRadius: '50px',
    backgroundColor: 'transparent',

    '&:hover': {},

    '&:focus': {},
  },

  '& .${classes.displayedRows}': {
    margin: 0,

    [theme.breakpoints.up('md')]: {
      marginLeft: 'auto',
    },
  },

  '& .${classes.actions}': {
    padding: '2px',
    borderRadius: '50px',
    textAlign: 'center',
  },

  '& .${classes.actions} > button': {
    margin: '0 8px',
    border: 'transparent',
    borderRadius: '2px',
    backgroundColor: 'transparent',

    '&:hover': {},

    '&:focus': {},
  },
}));