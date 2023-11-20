import STYLES from './styles';

export const getLastPercentage = (text) => {
  const regex = /(\d+)%[^%]*$/;
  const match = text.match(regex);

  if (match) {
    return parseInt(match[1], 10);
  } else {
    return -1;
  }
};

export const getStyle = (styleId) =>
  STYLES.map((style) => style.filters)
    .flat()
    .filter((style) => style.id === styleId)[0];
