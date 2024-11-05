import { initializeApp } from "firebase/app";
import {collection, doc, getDoc, getDocs, getFirestore, query, where} from "firebase/firestore/lite"
const firebaseConfig = {
  apiKey: "AIzaSyAT4ORt84uq8XJ33tIK307IaQusQu18VSw",
  authDomain: "vanlife-8d5a8.firebaseapp.com",
  projectId: "vanlife-8d5a8",
  storageBucket: "vanlife-8d5a8.firebasestorage.app",
  messagingSenderId: "840331965307",
  appId: "1:840331965307:web:6857227e5bf7de438203de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const collectionRef = collection(db, "vansData")

export async function getVans () {
    const querySnapshot = await getDocs(collectionRef)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    // console.log(dataArr)
    return dataArr
}

export async function getVanId(id) {
    const docRef = doc(db, "vansData", id)
    const vanSnapshot = await getDoc(docRef)
    return {
        ...vanSnapshot.data(),
        id: vanSnapshot.id
    }
}

export async function getHostvans () {
    const q = query(collectionRef, where("hostId", "==", "123"))
    const querySnapshot = await getDocs(q)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    // console.log(dataArr)
    return dataArr
}
// export async function getHostvans (id){
//     const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
//     const res = await fetch(url)
//     if(!res.ok){
//         throw {
//             message: "failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status,
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

export async function loginUser (creds){
    const res = await fetch("/api/login", {method: "post", body: JSON.stringify(creds)})
    const data = await res.json()
    if(!res.ok){
        throw{
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
        
    }
    return data
}