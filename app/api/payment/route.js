const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const data = await req.json();
  console.log('data: ', data.plan);
  let priceId = '';

  switch (data.plan) {
    case 'day':
      priceId = process.env.STRIPE_PRICE_ID_DAY;
      break;
    case 'week':
      priceId = process.env.STRIPE_PRICE_ID_WEEK;
      break;
    case 'month':
      priceId = process.env.STRIPE_PRICE_ID_MONTH;
      break;
    default:
      priceId = process.env.STRIPE_PRICE_ID_DAY;
      break;
  }

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_HOSTNAME}/photos?success=true&plan=${data.plan}`,
      cancel_url: `${process.env.NEXT_PUBLIC_HOSTNAME}/photos?canceled=true`,
    });
    return Response.json(session, {
      status: 200,
    });
  } catch (err) {
    return Response.json(err.message, {
      status: err.statusCode || 500,
    });
  }
}
