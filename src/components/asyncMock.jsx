import { appFirestore } from '../main'
import { query, where, collection, doc, getDoc, getDocs, getFirestore, updateDoc, addDoc,  serverTimestamp} from 'firebase/firestore'

const fetchProducts = async () => {
  const db = getFirestore(appFirestore);
  const collectionProductos = collection(db, 'Producto');
  
  try {
    const snapshot = await getDocs(collectionProductos);

    if (snapshot.size !== 0) {
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return list;
      
    } else {
      console.log('Coleccion no encontrada');
      return [];
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
    }
};

export const getProductsByCategory = async (categoryId) => {
    const products = await fetchProducts();
    return new Promise((resolve) => {
        //setTimeout(() => {
            resolve(products.filter(prod => prod.Categoria === categoryId))
        //}, 500)
    })
}

export const getProducts = async () => {
    const products = await fetchProducts();
    return new Promise ((resolve) => {
        //setTimeout(() => {
            resolve(products)
        //}, 500)
    })  
}

export const getProductsById = async (productId) => {
    const products = await fetchProducts();
    return new Promise((resolve) => {
        //setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        //}, 500)
    })
}

export const decreaseStock = async (productId, quantity) => {
  const db = getFirestore(appFirestore);
  const productRef = doc(db, 'Producto', productId);

  try {
    const productSnapshot = await getDoc(productRef);

    if (productSnapshot.exists()) {

      const productData = productSnapshot.data();
      const nuevoStock = productData.Stock - quantity;  

      await updateDoc(productRef, { Stock: nuevoStock });

      console.log(`Stock actualizado para el producto ${productId}. Nuevo stock: ${nuevoStock}`);
    } else {
      console.log(`El producto con ID ${productId} no fue encontrado.`);
    }
  } catch (error) {
    console.error('Error al restar stock:', error);
  }
};

export const saveOrder = async (orderData) => {
  const db = getFirestore(appFirestore);

  try {
    // Agregar un nuevo documento a la colección 'Pedidos'
    const orderRef = await addDoc(collection(db, 'Venta'), {
      ...orderData,
      Fecha: serverTimestamp(),
    });

    console.log('Pedido guardado con éxito. ID del pedido:', orderRef.id);
    return orderRef.id; 
  } catch (error) {
    console.error('Error al guardar el pedido:', error);
    throw error;
  }
};