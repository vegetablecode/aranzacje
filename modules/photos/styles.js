const STYLES = [
  {
    id: 'classic',
    label: 'Style Klasyczne 💁‍♂️',
    filters: [
      {
        id: 'default',
        label: 'Delikatny 🦋',
        prompt: 'default design',
        image: '/images/default.png',
      },
      {
        id: 'cozy',
        label: 'Przytulny 🧸',
        prompt: 'cozy design',
        image: '/images/cozy.png',
      },
      {
        id: 'ikea',
        label: 'Szwedzki 🇸🇪',
        prompt: 'ikea design',
        image: '/images/ikea.png',
      },
    ],
  },
  {
    id: 'nature',
    label: 'W klimacie Natury 🌿',
    filters: [
      {
        id: 'tropical',
        label: 'Tropikalny 🌴',
        prompt: 'tropical design',
        image: '/images/tropical.png',
      },
      {
        id: 'plants',
        label: 'Roślinny 🌱',
        prompt: 'plants design',
        image: '/images/plants.png',
      },
      {
        id: 'rasta',
        label: 'Afrykański 🎍',
        prompt: 'rasta design',
        image: '/images/rasta.png',
      },
    ],
  },
];

export default STYLES;
