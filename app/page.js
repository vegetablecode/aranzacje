'use client';

import { ArrowRightIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useEffect, useRef, useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from 'common/config/firebase';
import { v4 as uuid } from 'uuid';
import usePhotoStore from 'modules/photos/store';
import { useRouter } from 'next/navigation';
import Header from 'modules/photos/components/Header';
import BottomPrimaryButton from 'modules/photos/components/BottomPrimaryButton';
import PhotoFrame from 'modules/photos/components/PhotoFrame';

const Home = () => {
  const [file, setFile] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [percent, setPercent] = useState(0);
  const { image, setImage } = usePhotoStore();
  const hiddenFileInput = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (file) {
      handleUpload();
    }
  }, [file]);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      const storageRef = ref(storage, `/uploads/${uuid() + '_' + file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          setIsLoading(true);
          setPercent(percent);
        },
        (err) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setImage(url);
            setIsLoading(false);
            console.log(url);
          });
        }
      );
    }
  };

  return (
    <div className="w-screen min-h-screen px-5 pt-12 pb-20 flex flex-col space-y-8 items-center justify-start">
      <Header showIntro />
      <PhotoFrame
        image={file ? URL.createObjectURL(file) : null}
        isLoading={isLoading}
        progress={percent}
      />
      <div className="text-sm text-center text-gray-400 px-8">
        Postaraj się, żeby zdjęcie było dobrze oświetlone! Im lepsza jakość
        zdjęcia, tym lepszy efekt końcowy.
      </div>
      <input
        type="file"
        onChange={handleChange}
        accept="/image/*"
        ref={hiddenFileInput}
        style={{ display: 'none' }}
      />
      {image ? (
        <BottomPrimaryButton
          text="Dalej"
          icon={<ArrowRightIcon className="w-5 h-5" />}
          onClick={() => router.push('/signup')}
          isLoading={isLoading}
          iconRight
        />
      ) : (
        <BottomPrimaryButton
          text="Wybierz zdjęcie"
          icon={<PlusIcon className="w-5 h-5" />}
          onClick={() => hiddenFileInput.current.click()}
        />
      )}
    </div>
  );
};

export default Home;
