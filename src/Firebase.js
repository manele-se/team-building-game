import GoogleFirebase from "firebase";
import firebaseConfig from "./firebaseConfig";

const firebase = GoogleFirebase.initializeApp(firebaseConfig);

const saveDoc = async (collection, state) => {
  // if state exists, get the id from the state
  const id = state && state.id;

  // Create a copy of the state, or create a new object if there is no state
  const doc = state ? { ...state } : {};

  if (id) {
    // There is an id! This means there is already a document in the database
    // The id does not have to be saved in the database, so delete it from the copy
    delete doc.id;

    // Update the document in the database
    await firebase
      .firestore()
      .collection(collection)
      .doc(id)
      .set(doc);

    // Return the new state with the id
    return { ...doc, id };
  } else {
    // There is no id! This means there is no document in the database
    // Create a new document in the database
    const result = await firebase
      .firestore()
      .collection(collection)
      .add(doc);

    // Return a copy of the document, with its new id
    return { ...doc, id: result.id };
  }
};

const Firebase = {
  firestore: firebase.firestore.bind(firebase),
  saveDoc: saveDoc
};

export default Firebase;
