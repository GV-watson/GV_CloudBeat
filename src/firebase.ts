import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyBFK9UDO0XCJ5qRlI1DT9o1ERFw9pEoISo",
  authDomain: "cis-grp-prjk.firebaseapp.com",
  projectId: "cis-grp-prjk",
  storageBucket: "cis-grp-prjk.firebasestorage.app",
  messagingSenderId: "342018301768",
  appId: "1:342018301768:web:9daf47b7d3e378e9299d7d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;
