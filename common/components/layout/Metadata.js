const Metadata = () => {
  const title = '🏠 Decoratly | Turn photos into interior designs';
  const description =
    'Redefine your space effortlessly! Upload a room photo, select a preset, and watch your space transform with our innovative interior design app. Style made simple!';
  const imageUrl = 'https://www.decoratly.com/preview.png';
  const url = 'www.decoratly.com';

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta property="og:site_name" content="Decoratly" />
      <meta property="og:url" content={`${url}`} />
      <meta name="og:image" property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:card" property="twitter:card" content={imageUrl} />
      <meta name="twitter:site" content={url} />
      <meta name="twitter:creator" content="Kamil Uhryn" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
};

export default Metadata;
