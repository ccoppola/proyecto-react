import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDoc,
  getDocs,
  doc,
  query,
  where,
  addDoc,
} from "firebase/firestore"; // SDK -> Soft Dev Kit
import productos from "../data/productos";

const firebaseConfig = {
    apiKey: "AIzaSyBJCa-wNmUSvmE0ev7QtXsXclcw3zYc8GE",
    authDomain: "react-ecommerce-98e92.firebaseapp.com",
    projectId: "react-ecommerce-98e92",
    storageBucket: "react-ecommerce-98e92.appspot.com",
    messagingSenderId: "620853493186",
    appId: "1:620853493186:web:45b46b887c929183322a5b"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export async function  getItemByID(itemID){
    let docRef = doc(db,"products",itemID);
    let docSnap = await getDoc(docRef);
    let datos = docSnap.data();
    return ({...datos,IDproducto:itemID})
}

export async function getItemsByCategory(category){
    let collectionRef = collection(db, "products");
    let q = query(collectionRef,where("categoria","==",category));
    let docsSnap = await getDocs(q);
    let dataDocs = docsSnap.docs;
    let misDatos = dataDocs.map(doc => ({...doc.data(), IDproducto : doc.id}) )

    return misDatos;
}

export async function getItems(){
    let collectionRef = collection(db, "products");
    let docsSnap = await getDocs(collectionRef);
    let dataDocs = docsSnap.docs;
    let misDatos = dataDocs.map(doc => ({...doc.data(), IDproducto : doc.id}) )

    return misDatos;
}

export async function createBuyOrder(order){
    const collectionRef = collection(db, "orders");
    let newOrder = await addDoc(collectionRef,order)
    return newOrder.id;
}

export async function exportProducts(){
    const collectionRef = collection(db, "products");
    // uso for of en lugar de foreach xq foreach no funciona bien con asincronia
    for(let producto of productos){
     await addDoc(collectionRef,producto)
    } 
}




