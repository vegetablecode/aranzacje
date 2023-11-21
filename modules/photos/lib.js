import {
  collection,
  doc,
  addDoc,
  query,
  getDocs,
  getDoc,
  setDoc,
} from 'firebase/firestore';
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

export const getPhoto = async (user, photoId) => {
  const photoSnap = await getDoc(
    doc(db, `users/${user.uid}/photos/${photoId}`)
  );

  return photoSnap.data();
};

export const addNewPrediction = async (user, photoId, style, prediction) => {
  await setDoc(
    doc(db, `users/${user.uid}/photos/${photoId}/predictions/${style.id}`),
    { prediction: prediction }
  );
};

export const getPrediction = async (user, photoId, styleId) => {
  const predictionSnap = await getDoc(
    doc(db, `users/${user.uid}/photos/${photoId}/predictions/${styleId}`)
  );
  const data = predictionSnap.data();
  return data?.prediction ?? null;
};
