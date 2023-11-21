'use client';
import Navbar from 'modules/photos/components/Navbar';
import PhotoFrame from 'modules/photos/components/PhotoFrame';
import { ArrowRightIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useEffect, useRef, useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from 'common/config/firebase';
import { v4 as uuid } from 'uuid';
import { useRouter } from 'next/navigation';
import BottomPrimaryButton from 'modules/photos/components/BottomPrimaryButton';
import useAuthStore from 'modules/auth/store';
import { addNewPhoto } from 'modules/photos/lib';

const Page = () => {
  const [file, setFile] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [percent, setPercent] = useState(0);
  const hiddenFileInput = useRef(null);
  const router = useRouter();
  const { user } = useAuthStore();

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
            saveImage(url);
          });
        }
      );
    }
  };

  const saveImage = async (image) => {
    await addNewPhoto(user, image);
    router.push('/photos');
    setIsLoading(false);
  };

  return (
    <div className="w-screen min-h-screen px-5 pt-12 pb-20 flex flex-col space-y-8 items-center justify-start">
      <Navbar title="Dodaj pomieszczenie ✨" />
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
        className="file-input h-0"
      />
      <BottomPrimaryButton
        text="Wybierz zdjęcie"
        isLoading={isLoading}
        disabled={isLoading}
        icon={<PlusIcon className="w-5 h-5" />}
        onClick={() => hiddenFileInput.current.click()}
      />
    </div>
  );
};

export default Page;
