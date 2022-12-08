import { query, where, collection, getDocs } from '@firebase/firestore';
import { doc, getDoc } from "firebase/firestore";
import { db } from './firebaseConfig';

export const firestoreFetch = async(idCategory) => {
    let q
    if (idCategory) {
        q = query(collection(db, "products"), where('categoryId', '==', parseInt(idCategory)))
    } else {
        q = query(collection(db, "products"))
    }
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
}

export const firestoreFetchOne = async (idItem) => {
    const docRef = doc(db, "products", idItem);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {
            id: idItem,
            ...docSnap.data()
        }
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}