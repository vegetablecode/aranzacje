import Modal from 'common/components/layout/Modal';
import BottomPrimaryButton from './BottomPrimaryButton';
import { createCheckoutSession } from 'modules/payment/lib';
import { useRouter } from 'next/navigation';
import classNames from 'common/utils/classNames';
import Badge from 'common/components/layout/Badge';

const features = [
  '♾️ Nielimitowane pomieszczenia',
  '🛠️ Kreator styli',
  '✨ 30 gotowych styli',
  '👌 Generowanie w wysokiej rozdzielczości',
  '📂 Pobieranie wygenerowanych zdjęć',
];

const pricing = [
  {
    id: 'day',
    text: '24 godziny',
    price: 10,
    old: 20,
  },
  {
    id: 'week',
    text: '7 dni',
    price: 30,
    old: 60,
  },
  {
    id: 'month',
    text: '30 dni',
    price: 60,
    old: 120,
  },
];

const PremiumModal = ({ plan, setPlan }) => {
  const router = useRouter();
  const pricingItem = pricing.find((item) => item.id === plan) ?? pricing[0];

  const unlock = async () => {
    const session = await createCheckoutSession(plan);
    if (session?.url) {
      router.push(session.url);
    }
  };

  const renderContent = () => (
    <>
      <div className="flex flex-col justify-center space-y-6">
        <div className="text-3xl font-black">
          Profesjonalne projektowanie wnętrz z wersją{' '}
          <span className="uppercase text-2xl mr-2 badge badge-primary h-[35px] border-0 py-1 px-2 rounded-xl bg-primary">
            pro
          </span>
          !
        </div>
        <div className="flex flex-col space-y-2">
          {features.map((feature) => (
            <div key={feature} className="flex space-x-2 text-left">
              <div>{feature}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full absolute bottom-[105px] px-5 left-0 flex space-x-2">
        {pricing.map((item) => (
          <div
            key={item.id}
            onClick={() => setPlan(item.id)}
            className={classNames(
              'flex flex-1 flex-col justify-between items-center cursor-pointer border-2 rounded-[18px] px-4 py-2',
              item.id === plan ? 'border-primary' : 'border-neutral'
            )}
          >
            <div>
              <div className="font-bold">{item.text}</div>
            </div>
            <div className="flex space-x-2">
              <div className="text-2xl">
                {item.price}
                <span className="text-lg"> zł</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <BottomPrimaryButton
        onClick={unlock}
        text={`💳 Kup wersję pro - ${pricingItem.price} zł`}
      />
      <div className="absolute w-full flex justify-center left-0 bottom-[190px]">
        <div className="font-bold">
          🔐 Odblokuj <Badge text="pro" /> na {pricingItem.text} 📆
        </div>
      </div>
      <div className="absolute w-full flex justify-center left-0 bottom-[78px]">
        <div className="text-green-600 text-sm">✓ Jednorazowa płatność</div>
      </div>
    </>
  );

  return (
    <Modal
      banner="/bg/premium.png"
      full
      id="premium"
      content={renderContent()}
    />
  );
};

export default PremiumModal;
