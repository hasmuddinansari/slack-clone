import { db } from 'utils';
import firebase from 'firebase';

export const useFirebase = ({ location, subLocation, subLocationId }) => {
  const insertItem = ({ item }) => {
    db.collection(location).add(item);
  };

  const insertMessage = ({ message }) => {
    db.collection(location)
      .doc(subLocationId)
      .collection(subLocation)
      .add({
        ...message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
  };

  return {
    insertItem,
    insertMessage,
  };
};
