import imageCompression from 'browser-image-compression';
import PhotoFrame from 'modules/photos/components/PhotoFrame';
import { PlusIcon } from '@heroicons/react/24/outline';
import { useEffect, useRef, useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from 'common/config/firebase';
import { v4 as uuid } from 'uuid';
import { useRouter } from 'next/navigation';
import BottomPrimaryButton from 'modules/photos/components/BottomPrimaryButton';
import useAuthStore from 'modules/auth/store';
import { addNewPhoto } from 'modules/photos/lib';
import { onError } from 'common/utils/sentry';
import usePhotoStore from '../store';

const Uploader = ({ intro = false }) => {
  const [file, setFile] = useState('');
  const [compressedFile, setCompressedFile] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [percent, setPercent] = useState(0);
  const { setImage } = usePhotoStore();
  const hiddenFileInput = useRef(null);
  const router = useRouter();
  const { user } = useAuthStore();

  useEffect(() => {
    if (file) {
      compressFile(file);
    }
  }, [file]);

  useEffect(() => {
    if (compressedFile) {
      handleUpload();
    }
  }, [compressedFile]);

  const compressFile = async () => {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    try {
      const compressed = await imageCompression(file, options);
      setCompressedFile(compressed);
    } catch (err) {
      onError(err, 'Nie udało się skompresować pliku');
    }
  };

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (compressedFile) {
      const storageRef = ref(
        storage,
        `/uploads/${uuid() + '_' + compressedFile.name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, compressedFile);

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
            if (intro) {
              setImage(url);
              router.push('/signup');
              setIsLoading(false);
            } else {
              saveImage(url);
            }
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
    <>
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
    </>
  );
};

export default Uploader;
