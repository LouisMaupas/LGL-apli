// firebase
import { Firestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  };

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
const db : Firestore = getFirestore(app);
  
/**
 * Returns the Firebase instance asynchronously.
 *
 * @return {Promise<App>} A promise resolving to the app instance.
 */
async function getAppInstance() {
  return app;
}

  // Get a list of cities from database to check if the API is working
  // async function getCities(db: Firestore) {
  //   const citiesCol = collection(db, 'cities');
  //   const citySnapshot = await getDocs(citiesCol);
  //   const cityList = citySnapshot.docs.map(doc => doc.data());
  //   return cityList;
  // }
  // getCities(db).then((cities) => {
  //   console.log("api res fonctionne bien = ", cities);
  // })

export {getAppInstance}