import {
  collection,
  doc,
  addDoc,
  query,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore';
import { v4 as uuid } from 'uuid';
import imageCompression from 'browser-image-compression';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { db } from 'common/config/firebase';
import { storage } from 'common/config/firebase';

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
  if (prediction?.output) {
    const archivedUrls = [];
    for (let url of prediction.output.slice(1)) {
      const archivedFile = await archiveFile(url);
      archivedUrls.push(archivedFile);
    }
    prediction.output = archivedUrls;
  }

  await setDoc(
    doc(db, `users/${user.uid}/photos/${photoId}/predictions/${style.id}`),
    { prediction: prediction }
  );
  await updateDoc(doc(db, `users/${user.uid}/photos/${photoId}`), {
    usedFilters: arrayUnion(style.id),
  });
};

export const getPrediction = async (user, photoId, styleId) => {
  const predictionSnap = await getDoc(
    doc(db, `users/${user.uid}/photos/${photoId}/predictions/${styleId}`)
  );
  const data = predictionSnap.data();
  return data?.prediction ?? null;
};

export const setPremiumUntil = async (user, date) => {
  await setDoc(doc(db, `users/${user.uid}`), {
    proUntil: date.toDate(),
  });
};

const archiveFile = async (url) => {
  const options = {
    maxSizeMB: 0.5,
    maxWidthOrHeight: 1500,
    useWebWorker: true,
  };

  const res = await fetch(url);
  const file = await res.blob();
  const compressedFile = await imageCompression(file, options);

  const storageRef = ref(storage, `/renders/${uuid() + '_' + 'render.png'}`);
  await uploadBytesResumable(storageRef, compressedFile);
  const downloadUrl = await getDownloadURL(storageRef);
  return downloadUrl;
};
