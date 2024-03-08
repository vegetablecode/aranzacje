import SlotMachine from 'modules/slot-machine/SlotMachine';

const Prediction = ({
  progress,
  imageUrl,
  data,
  resetForm,
  isGenerating,
  model,
}) => {
  const renderStarting = () => (
    <>
      <div className="loading loading-infinity loading-lg"></div>
      <div className="flex space-x-2 items-center">
        <div className="flex flex-col font-bold text-lg items-center">
          <div>Waking up our designer! 😴🤖</div>
          <div className="text-sm opacity-80 font-normal text-center mt-1">
            It can take up to {model === 'arrange' ? 5 : 2} minutes to render,{' '}
            <br /> so you can leave your phone or visit our cassino <br /> ⬇️
          </div>
        </div>
      </div>
    </>
  );

  const renderProcessing = () => (
    <>
      <div
        className="radial-progress"
        style={{ '--value': progress }}
        role="progressbar"
      >
        {progress}%
      </div>
      <div className="flex space-x-2 items-center">
        <div>Creating designs ✨</div>
      </div>
    </>
  );

  return data?.output ? (
    <div className="flex flex-col space-y-2">
      <div className="text-2xl pb-2 font-black">💡 Generated ideas</div>
      {model === 'arrange' ? (
        <a href={data.output} target="_blank">
          <img className="w-full h-auto card" src={data.output} alt="design" />
        </a>
      ) : (
        data.output.slice(1).map((item) => (
          <a href={item} target="_blank">
            <img className="w-full h-auto card" src={item} alt="design" />
          </a>
        ))
      )}
    </div>
  ) : (
    <div className="card image-full border border-dashed overflow-hidden mt-4 h-auto">
      <img
        className="h-auto blur"
        style={{ opacity: progress * 0.01 }}
        src={imageUrl}
        alt="style"
      />
      {isGenerating ? (
        <div className="card-body flex flex-col justify-center space-y-5 items-center">
          <div className="flex flex-col py-4 space-y-2 justify-center items-center">
            {data?.status === 'starting' ? renderStarting() : ''}
            {data?.status === 'processing' ? renderProcessing() : ''}
          </div>
          <div className="divider uppercase divider-primary font-bold">
            🎰 Play a mini game 🎰
          </div>
          <SlotMachine />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Prediction;
