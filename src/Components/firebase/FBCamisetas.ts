import { initializeApp } from "firebase/app"
import { doc, getFirestore, setDoc } from "firebase/firestore"
import { firebaseConfig } from "../../config/firebaseConfig"
import { nanoid } from "nanoid"





// export const app = initializeApp(firebaseConfig)
// export const db = getFirestore()

// export const cargar = async () => {
//     try{
//         console.log('carga de datos...');
//         const docRef = doc(db, "Camisetas", nanoid(20))
//         await setDoc(docRef, camiseta)
//     }catch(error){
//         console.log(error)
//     }
// }

