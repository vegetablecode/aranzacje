import { collection, doc, addDoc, query, getDocs } from 'firebase/firestore';
import { db } from 'common/config/firebase';

export const addNewPhoto = async (user, url) => {
  const photo = {
    url: url,
  };
  const goalRef = await addDoc(
    collection(db, `users/${user.uid}/photos`),
    photo
  );
  return goalRef.id;
};

export const getPhotos = async (user) => {
  const photosSnap = await getDocs(
    query(collection(db, `users/${user.uid}/photos`))
  );

  return photosSnap.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
};
