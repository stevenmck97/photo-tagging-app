import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { firebaseConfig } from "../firebase-config";

const getCharacterDocs = async () => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const querySnapshot = await getDocs(collection(db, "characters"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
};

export default getCharacterDocs;
