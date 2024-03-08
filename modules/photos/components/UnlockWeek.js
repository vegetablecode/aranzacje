import { openModalWithId } from 'common/components/layout/Modal';

const UnlockWeek = ({ setPlan }) => (
  <div
    onClick={() => {
      setPlan('week');
      openModalWithId('premium');
    }}
    className="card text-white cursor-pointer p-5 flex flex-row justify-between bg-cover bg-green-pattern"
  >
    <div className="flex flex-col space-y-2">
      <div className="font-bold text-xl">
        Odblokuj wszystkie funkcje <br /> na 7 dni!
      </div>
      <div className="underline">💸 Jednorazowa płatność</div>
    </div>
    <div className="flex flex-col justify-between items-end">
      <div className="line-through">60 zł</div>
      <div className="text-6xl font-bold -mb-1">
        30<span className="text-lg">zł</span>
      </div>
    </div>
  </div>
);

export default UnlockWeek;
