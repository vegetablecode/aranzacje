import Modal, {
  closeModalWithId,
  openModalWithId,
} from 'common/components/layout/Modal';
import Photo from './Photo';
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline';
import { getAllStyles, getLastPercentage } from '../utils';
import BottomPrimaryButton from './BottomPrimaryButton';
import { checkPrediction, getPrediction } from '../lib';
import { useState } from 'react';
import sleep from 'common/utils/sleep';
import Prediction from './Prediction';
import usePhotoStore from '../store';
import useAuthStore from 'modules/auth/store';
import isPro from 'common/utils/isPro';
import { onError } from 'common/utils/sentry';
import ModelSwitcher from './ModelSwitcher';
import FilterPreview from './FilterPreview';
import { MODELS } from '../consts';

const RenderModal = ({
  image,
  mode,
  setMode,
  style,
  setStyle,
  model,
  setModel,
}) => {
  const [data, setData] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const { prompt } = usePhotoStore();
  const { userData } = useAuthStore();

  const handleGenerate = async () => {
    const isUserPro = isPro(userData?.proUntil);

    if (isUserPro || getAllStyles().find((item) => item.id === style)?.free) {
      setIsGenerating(true);
      await generatePhotos();
    } else {
      openModalWithId('premium');
    }
  };

  const generatePhotos = async () => {
    const version = MODELS.find((item) => item.id === model).version;
    const response = await getPrediction(image, style, mode, prompt, version);
    let prediction = await response.json();

    if (response.status !== 201) {
      onError(prediction.detail, 'Unable to generate ideas');
      return;
    }

    setData(prediction);
    await checkPredictions(prediction);
  };

  const checkPredictions = async (prediction) => {
    while (
      prediction.status !== 'succeeded' &&
      prediction.status !== 'failed'
    ) {
      await sleep(2000);
      const response = await checkPrediction(prediction);

      prediction = await response.json();

      if (response.status !== 200) {
        onError(prediction.detail, 'Unable to generate interiors');
        return;
      }

      if (prediction?.logs) {
        setProgress(getLastPercentage(prediction.logs));
      }

      if (prediction?.output) {
        setIsGenerating(false);
      }

      setData(prediction);
    }
  };

  const resetForm = () => {
    setIsGenerating(false);
    setData(null);
  };

  const renderFilters = () => (
    <div className="flex flex-col space-y-4 items-center">
      <Photo src={image} mode={mode} setMode={setMode} />
      <ArrowDownCircleIcon className="w-5 h-5" />
      <FilterPreview model={model} style={style} />
    </div>
  );

  const renderPrediction = () => (
    <Prediction
      model={model}
      progress={progress}
      imageUrl={image}
      data={data}
      resetForm={resetForm}
      isGenerating={isGenerating}
    />
  );

  const handleClose = () => {
    setStyle(null);
    resetForm();
  };

  const renderContent = () => (
    <>
      {data || isGenerating ? renderPrediction() : renderFilters()}
      {data?.output ? (
        ''
      ) : (
        <BottomPrimaryButton
          isLoading={isGenerating}
          disabled={isGenerating}
          onClick={handleGenerate}
          text="Generate ✨"
          modal
        />
      )}
    </>
  );

  return (
    <Modal id="render" content={renderContent()} handleClose={handleClose} />
  );
};

export default RenderModal;
