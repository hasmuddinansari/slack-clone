import { db } from 'utils';
import { useCollection } from 'react-firebase-hooks/firestore';

export const useFirebase = ({ location }) => {
  const [data, loading, error] = useCollection(
    db.collection(location).orderBy('name'),
  );

  const insertItem = ({ item }) => {
    db.collection(location).add(item);
  };

  return {
    insertItem,
    data,
    loading,
    error,
  };
};
