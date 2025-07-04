import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc, setDoc, writeBatch, documentId, DocumentSnapshot } from "firebase/firestore";
import products from "./data"
const firebaseConfig = {
    apiKey: "AIzaSyBjjq4VzBE0ufkbBlCFxpjooUSJfex4bwE",
    authDomain: "oh--tea.firebaseapp.com",
    projectId: "oh--tea",
    storageBucket: "oh--tea.firebasestorage.app",
    messagingSenderId: "781168295584",
    appId: "1:781168295584:web:d8a0db6c7b4901dafa53c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// 2. Conexión con la base de datos de Firestore
const db = getFirestore(app);
export default async function getAsyncData() {
    const collectionRef = collection(db, "products");
    const productsSnapshot = await getDocs(collectionRef)
    const documentsData = productsSnapshot.docs.map(doc => {
        const fullData = doc.data()
        fullData.id = doc.id;
        return fullData;
    }
    )
    return documentsData; // resolve(documentsData)
}

export async function getAsyncItemById(itemID) {
    const docRef = doc(db, "products", itemID)
    const docSnapshot = await getDoc(docRef);
    const docData = docSnapshot.data();
    return docData;
}

export async function getAsyncItemsByCategory(catID) {
    const productsCollectionRef = collection(db, "products");
    const q = query(productsCollectionRef, where("category", "==", catID))
    const productsSnapshot = await getDocs(q)
    const documentsData = productsSnapshot.docs.map(doc => {
        const fullData = doc.data()
        fullData.id = doc.id;
        return fullData;
    }
    )
    return documentsData;
}

export async function exportProductsToDB() {
    for (let item of products) {
        delete item.id;
        const docID = await addDoc(collection(db, "products"), item)
    }
}

export async function createBuyOrder(orderData) {
    const newOrderDoc =
        await addDoc(collection(db, "orders"), orderData);
    return newOrderDoc.id
}

export async function createBuyOrderWithStockUpdate(order) {
    const orderRef = collection(db, "order");
    const productsRef = collection(db, "products");
    const batch = writeBatch(db);
    const arrayIds = order.items.map((item) => item.id);
    const q = query(productsRef, where(documentId(), "in", arrayIds));
    const querySnaphot = await getDocs(q);
    const docsToUpdate = querySnaphot.docs;
    let itemsSinStock = [];
    docsToUpdate.forEach((doc) => {
        let { stock } = doc.data();
        let itemInCart = order.items.find((item) => item.id === doc.id);
        let countInCart = itemInCart.count;
        let newStock = stock - countInCart;
        if (newStock < 0) {
            itemsSinStock.push(doc.id);
        }
        else {
            batch.update(doc.ref, { stock: newStock });
        }
    });
}