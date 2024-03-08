import classNames from 'common/utils/classNames';
const { MODES } = require('../consts');

const Photo = ({ src, mode, setMode }) => {
  const handleChange = (event) => {
    setMode(event.target.value);
  };

  let rooms = {
    Room: 'Pokój',
    'Living room': 'Pokój dzienny',
    Bedroom: 'Sypialnia',
    Kitchen: 'Kuchnia',
    Bathroom: 'Łazienka',
    'Home office': 'Biuro domowe',
    'Gaming room': 'Pokój do gier',
    'Study room': 'Pokój do nauki',
    Office: 'Biuro',
    Building: 'Budynek',
    House: 'Dom',
  };

  return (
    <div className="card shadow overflow-hidden">
      <img
        src={src}
        alt="room"
        className={classNames('object-cover w-full', setMode ? 'h-36' : 'h-48')}
      />
      {setMode ? (
        <div className="w-full bg-white flex-col flex justify-between items-center space-y-2 px-4 py-3">
          <div className="text-sm uppercase">Pomieszczenie:</div>
          <select
            onChange={handleChange}
            value={mode}
            className="select w-full"
          >
            {MODES.map((item, idx) => (
              <option key={item}>{rooms[item]}</option>
            ))}
          </select>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Photo;
