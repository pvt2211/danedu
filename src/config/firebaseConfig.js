import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTfDbP-wcbneD6qK5WcHpOq4-L-Jxl9j8",
  authDomain: "danedu-c43b1.firebaseapp.com",
  projectId: "danedu-c43b1",
  storageBucket: "danedu-c43b1.appspot.com",
  messagingSenderId: "300974484024",
  appId: "1:300974484024:web:84422a876e5579943054cd",
  measurementId: "G-1RGCHL44JW",
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const authenticate = getAuth();

async function getCities(db) {
  const citiesCol = collection(db, "cities");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}

async function createAccount(email, password) {
  await createUserWithEmailAndPassword(authenticate, email, password)
    .then((userCredential) => {
      // Signed in
      userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return { errorCode, errorMessage };
      // ..
    });
}

export { getCities, database, createAccount };
