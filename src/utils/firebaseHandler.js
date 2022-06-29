import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { firebaseConfig } from "../firebase-config";

// let cloudXCoord;
// let cloudYCoord;

const compareCharCoords = async (coords) => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    // cloudXCoord = doc.get("coords.xCoord");
    // cloudYCoord = doc.get("coords.yCoord");

    const querySnapshot = await getDocs(collection(db, "characters"));
    querySnapshot.forEach((doc) => {
        coords.xCoord + 3 === doc.get("coords.xCoord") + 3 &&
        coords.yCoord + 3 === doc.get("coords.yCoord") + 3
            ? alert(`You found ${doc.get("name")}`)
            : alert("Keep trying!");
    });
};

// const compareCoords = (coords) => {

// }

export default compareCharCoords;
