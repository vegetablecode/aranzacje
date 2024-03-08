import { openModalWithId } from 'common/components/layout/Modal';

const UnlockDay = ({ setPlan }) => (
  <div
    onClick={() => {
      setPlan('day');
      openModalWithId('premium');
    }}
    className="card text-white cursor-pointer p-5 flex flex-row justify-between bg-cover bg-bottom bg-interior-pattern"
  >
    <div className="flex flex-col space-y-2">
      <div className="font-bold text-xl">
        Odblokuj wszystkie funkcje <br /> na 24 godziny!
      </div>
      <div className="underline">💸 Jednorazowa płatność</div>
    </div>
    <div className="flex flex-col justify-between items-end">
      <div className="line-through">20 zł</div>
      <div className="text-6xl font-bold -mb-1">
        10<span className="text-lg">zł</span>
      </div>
    </div>
  </div>
);

export default UnlockDay;
