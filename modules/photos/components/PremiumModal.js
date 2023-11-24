import Modal from 'common/components/layout/Modal';
import getStripe from 'common/utils/getStripe';

const features = [
  'Generowanie we wszystkich 19 stylach',
  'Nielimitowane pomieszczenia',
  'Pobieranie wygenerowanych stylizacji',
  'Dostęp do nowych i limitowanych filtrów',
  'Dożywotni dostęp do utworzonych wcześniej kreacji',
];

const PremiumModal = () => {
  async function handleCheckout() {
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      mode: 'payment',
      successUrl: `http://localhost:3000/success`,
      cancelUrl: `http://localhost:3000/cancel`,
    });
    console.warn(error.message);
  }

  const renderContent = () => (
    <div className="flex flex-col justify-center space-y-4 text-center">
      <div className="text-5xl">🔓</div>
      <div className="text-3xl font-bold">Odblokuj wszystko na tydzień ✨</div>
      <div className="flex flex-col space-y-2 text-sm">
        {features.map((feature) => (
          <div key={feature} className="flex space-x-2 text-left">
            <div>✓</div>
            <div>{feature}</div>
          </div>
        ))}
      </div>
      <button onClick={handleCheckout} className="btn btn-primary">
        💳 Odblokuj wszystko - 29 zł
      </button>
    </div>
  );

  return <Modal content={renderContent()} />;
};

export default PremiumModal;
