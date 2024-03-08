const preloadImages = (sources) => {
  const promises = sources.map((source) => {
    return new Promise((resolve) => {
      var img = new Image();
      img.src = source;
      img.onload = () => resolve();
    });
  });

  return Promise.all(promises).then(() => {});
};

export default preloadImages;
