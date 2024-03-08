import {
  collection,
  doc,
  addDoc,
  query,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  setDoc,
} from 'firebase/firestore';
import { db } from 'common/config/firebase';
import { FILTERS, MODELS } from './consts';

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

export const unlockPhoto = async (user, photoId) => {
  await updateDoc(doc(db, `users/${user.uid}/photos/${photoId}`), {
    unlocked: true,
  });
};

export const removePhoto = async (user, photoId) => {
  await deleteDoc(doc(db, `users/${user.uid}/photos/${photoId}`));
};

export const getPrediction = async (imageUrl, style, mode, prompt, version) =>
  fetch('/api/interior', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      image: imageUrl,
      version: version,
      prompt:
        style === 'builder'
          ? prompt
          : mode.concat(', ').concat(
              FILTERS.map((item) => item.filters)
                .flat()
                .find((item) => item.id === style).prompt
            ),
    }),
  });

export const checkPrediction = async (prediction) =>
  fetch('/api/interior?id=' + prediction.id, {
    method: 'GET',
  });
