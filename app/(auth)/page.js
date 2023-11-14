'use client';

import {
  ArrowRightIcon,
  CloudArrowUpIcon,
  PhotoIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import { useRef, useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from 'common/config/firebase';
import { v4 as uuid } from 'uuid';
import useOnboardingStore from 'modules/onboarding/store';
import classNames from 'common/utils/classNames';

const Header = () => (
  <div className="text-center">
    <div className="text-md uppercase">witaj w</div>
    <div className="text-transparent text-4xl font-bold bg-clip-text bg-gradient-to-b from-red-600 to-orange-600">
      Aranżacje AI <span className="text-white">🤖</span>
    </div>
  </div>
);

const PhotoFrame = ({ image, isLoading, progress }) =>
  image ? (
    <div className="card bg-neutral overflow-hidden flex flex-col items-center justify-center text-center border border-dashed">
      <img src={image} alt="room" className="w-auto h-64" />
      {isLoading ? (
        <>
          <div className="bg-black absolute h-64 w-full opacity-40"></div>
          <div className="absolute">
            <div
              className="radial-progress text-white"
              style={{ '--value': progress }}
              role="progressbar"
            >
              {progress}%
            </div>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  ) : (
    <div className="card bg-neutral flex flex-col items-center justify-center space-y-4 w-full py-10 px-5 text-center h-64 border border-dashed">
      <PhotoIcon className="h-10 w-10" />
      <div>Aby rozpocząć wykonaj zdjęcia pomieszczenia 📷</div>
    </div>
  );

const BottomPrimaryButton = ({ text, icon, onClick, isLoading }) => (
  <div className="fixed bottom-0 p-5 w-full">
    <button
      onClick={onClick}
      className={classNames(
        'btn btn-primary w-full',
        isLoading ? 'btn-loading' : ''
      )}
    >
      {isLoading ? <span className="loading loading-spinner"></span> : icon}
      {text}
    </button>
  </div>
);

const Home = () => {
  const [file, setFile] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [percent, setPercent] = useState(0);
  const { image, setImage } = useOnboardingStore();
  const hiddenFileInput = useRef(null);

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
      <Header />
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
      {file ? (
        <BottomPrimaryButton
          text="Dalej"
          icon={<ArrowRightIcon className="w-5 h-5" />}
          onClick={handleUpload}
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
