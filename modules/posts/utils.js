export const slugToCity = (slug) => {
  const titleCase = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  return titleCase;
};

export const cityToSlug = (cityName) => {
  return cityName.toLowerCase().replace(/\s+/g, '-');
};
