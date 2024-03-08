import imageCompression from 'browser-image-compression';
import { PlusIcon } from '@heroicons/react/24/outline';
import { useEffect, useRef, useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from 'common/config/firebase';
import { v4 as uuid } from 'uuid';
import { onError } from 'common/utils/sentry';

const Uploader = ({ setUrl }) => {
  const [file, setFile] = useState('');
  const [compressedFile, setCompressedFile] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [percent, setPercent] = useState(0);
  const hiddenFileInput = useRef(null);

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
      onError(err, 'Unable to compress the file');
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
        (err) => console.error(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setUrl(url);
            setIsLoading(false);
          });
        }
      );
    }
  };

  return (
    <>
      <div
        className="bg-white shadow w-full h-full items-center justify-center aspect-square card pointer"
        onClick={() => hiddenFileInput.current.click()}
      >
        {isLoading ? <div>{percent}%</div> : <PlusIcon className="h-5 w-5" />}
      </div>
      <input
        type="file"
        onChange={handleChange}
        accept="/image/*"
        ref={hiddenFileInput}
        className="file-input absolute w-1 h-0"
      />
    </>
  );
};

export default Uploader;
