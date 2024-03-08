import classNames from 'common/utils/classNames';

const ModelSwitcher = ({ model, setModel }) => {
  return (
    <div className="flex space-x-2 bg-white shadow card rounded-full flex-row p-2">
      {['👷 Remont', '✨ Aranżacja'].map((item, idx) => (
        <button
          key={item}
          onClick={() => setModel(idx === 1 ? 'arrange' : 'makeover')}
          className={classNames(
            'px-2 py-1 card',
            idx === 1 && model === 'arrange' ? 'text-white bg-primary' : ' ',
            idx === 0 && model === 'makeover' ? 'bg-primary text-white' : ' '
          )}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default ModelSwitcher;
