import Replicate from 'replicate';

export async function POST(req) {
  const data = await req.json();

  const response = await fetch('https://api.replicate.com/v1/predictions', {
    method: 'POST',
    headers: {
      Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      version:
        '8a89b0ab59a050244a751b6475d91041a8582ba33692ae6fab65e0c51b700328',
      input: {
        image: data.image,
        prompt: data.prompt,
        scheduler: 'K_EULER_ANCESTRAL',
        num_samples: 4,
        guidance_scale: 7.5,
        negative_prompt:
          'anime, cartoon, graphic, text, painting, crayon, graphite, abstract, glitch, deformed, mutated, ugly, disfigured',
        num_inference_steps: 30,
        adapter_conditioning_scale: 1,
        adapter_conditioning_factor: 1,
      },
    }),
  });

  if (response.status !== 201) {
    let error = await response.json();
    console.log('error: ', error);
    return Response.json(
      { detail: error.detail },
      {
        status: 500,
      }
    );
  }

  const prediction = await response.json();
  return Response.json(prediction, {
    status: 201,
  });
}

export async function GET(req) {
  const response = await fetch(
    'https://api.replicate.com/v1/predictions/' +
      req.nextUrl.searchParams.get('id'),
    {
      headers: {
        Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    }
  );
  if (response.status !== 200) {
    let error = await response.json();
    return Response.json(
      { detail: error.detail },
      {
        status: 500,
      }
    );
  }

  const prediction = await response.json();
  return Response.json(prediction, {
    status: 200,
  });
}
