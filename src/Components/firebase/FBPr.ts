import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../config/firebaseConfig";
import { collection, deleteDoc, doc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import { IProducto } from "../interfaces/IProductos";
import { nanoid } from "nanoid";

import zapas from './data/zapas.json'




export const app = initializeApp(firebaseConfig)
export const db = getFirestore()


export const getProductos = async ():Promise<IProducto[]> => {
    let productos: IProducto[] = [];
    const productosRef = collection(db, "Productos");
    const ProductosDocs = await getDocs(productosRef)
    ProductosDocs.forEach(doc => {
        const producto = { ...doc.data() }
        productos.push(producto as IProducto)
    });
    console.log(productos);
    return productos;
}


export const newProducto = async (data: IProducto) => {
    try{
        data.codigo = nanoid(20);
        const newData = {codigo: nanoid(20),...data}
        const docRef = doc(db,"Productos", newData.codigo);
        await setDoc(docRef, newData)
        alert('Producto insertado')
    }catch(error){
        console.log(error)
    }
}

export const deleteProducto = async (codigo: string) => {
    await deleteDoc(doc(db, "Productos", codigo))
    window.location.reload();
}

// carga masiva de datos
export const zapatillas = async () => {
    try{
        console.log('carga de datos...');
        zapas.map(async (zapato) => {
            const id = nanoid(20);
            const docRef = doc(db, "Zapatillas", id);
            await setDoc(docRef, { id: id, ...zapato });
            window.location.reload();
        })
    }catch(error) {
        console.log(error)
    }
}