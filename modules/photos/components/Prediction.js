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
          <div>Budzimy naszego projektanta AI! 😴🤖</div>
          <div className="text-sm opacity-80 font-normal text-center mt-1">
            Renderowanie moe zająć nawet {model === 'arrange' ? 5 : 2} minut,{' '}
            <br /> więc możesz zostawić telefon lub odwiedzić casino <br /> ⬇️
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
        <div>Generowanie wnętrz ✨</div>
      </div>
    </>
  );

  return data?.output ? (
    <div className="flex flex-col space-y-2">
      <div className="text-2xl pb-2 font-black">💡 Wizualizacje</div>
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
            🎰 Zagraj w mini grę 🎰
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
