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
    // querySnapshot.forEach((doc) => {
    //     for (let i = 1; i <= 3; i++) {
    //         coords.xCoord + i === doc.get("coords.xCoord") + i &&
    //         coords.yCoord + i === doc.get("coords.yCoord") + i
    //             ? alert(`You found ${doc.get("name")}`)
    //             : console.log("fail");
    //     }
    // });

    querySnapshot.forEach((doc) => {
        compareCoords(
            coords.xCoord,
            coords.yCoord,
            doc.get("coords.xCoord"),
            doc.get("coords.yCoord")
        )
            ? console.log("you win lol")
            : console.log("u suck");
    });
};

const compareCoords = (localXCoord, localYCoord, cloudXCoord, cloudYCoord) => {
    return (
        (localXCoord === cloudXCoord && localYCoord === cloudYCoord) ||
        (localXCoord + 1 === cloudXCoord && localYCoord + 1 === cloudYCoord) ||
        (localXCoord + 2 === cloudXCoord && localYCoord + 2 === cloudYCoord) ||
        (localXCoord + 3 === cloudXCoord && localYCoord + 3 === cloudYCoord) ||
        (localXCoord - 1 === cloudXCoord && localYCoord - 1 === cloudYCoord) ||
        (localXCoord - 2 === cloudXCoord && localYCoord - 2 === cloudYCoord) ||
        (localXCoord - 3 === cloudXCoord && localYCoord - 3 === cloudYCoord)
    );
};

export default compareCharCoords;
