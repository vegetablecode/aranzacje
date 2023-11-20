const STYLES = [
  {
    id: 'free',
    label: 'Style DARMOWE 🤑',
    filters: [
      {
        id: 'default',
        label: 'Neutralny 😌',
        prompt: 'default design',
        image: '/images/default.jpeg',
      },
      {
        id: 'darkmode',
        label: 'Dark Mode',
        prompt: 'black walls, modern wood design',
        image: '/images/darkmode.jpeg',
      },
    ],
  },
  {
    id: 'classic',
    label: 'Style Klasyczne 💁‍♂️',
    filters: [
      {
        id: 'modern',
        label: 'Modernistyczny ✌️',
        prompt: 'modern design',
        image: '/images/modern.jpeg',
      },
      {
        id: 'cozy',
        label: 'Przytulny 🧸',
        prompt: 'cozy design',
        image: '/images/cozy.jpeg',
      },
      {
        id: 'cozydark',
        label: 'Przytulny ciemny ✨',
        prompt: 'cozy design',
        image: '/images/cozydark.jpeg',
      },
      {
        id: 'industrial',
        label: 'Industrialny 🏗️',
        prompt: 'industrial design',
        image: '/images/industrial.jpeg',
      },
      {
        id: 'vintage',
        label: 'Vintage 📜',
        prompt: 'vintage design',
        image: '/images/vintage.jpeg',
      },
    ],
  },
  {
    id: 'trends',
    label: 'Trendy 2023 🔥',
    filters: [
      {
        id: 'midcentury',
        label: 'Mid-century modern 🗿',
        prompt: 'midcentury modern',
        image: '/images/midcentury.jpeg',
      },
      {
        id: 'stone',
        label: 'Kamienny 🗿',
        prompt: 'organic stone design',
        image: '/images/stone.jpeg',
      },
      {
        id: 'marble',
        label: 'Marmurowy 🪨',
        prompt:
          'raw natural materials, dramatic, colorful marble, wooden ceiling, dark walls',
        image: '/images/marble.jpeg',
      },
      {
        id: 'maximalist',
        label: 'Maksymalista ♾️',
        prompt: 'modern maximalism',
        image: '/images/maximalist.jpeg',
      },
      {
        id: 'transparent',
        label: 'Przezroczysto-Szklany 🧊',
        prompt: 'transparent, glassy design',
        image: '/images/transparent.jpeg',
      },
    ],
  },
  {
    id: 'nature',
    label: 'Style skandynawskie 🇳🇴',
    filters: [
      {
        id: 'ikea',
        label: 'Szwedzki 🇸🇪',
        prompt: 'ikea design',
        image: '/images/ikea.jpeg',
      },
      {
        id: 'scandinavian',
        label: 'Skandynawski 👌',
        prompt: 'scandinavian',
        image: '/images/scandinavian.jpeg',
      },
      {
        id: 'nordicdark',
        label: 'Skandynawski ciemny ♠️',
        prompt: 'scandinavian dark design',
        image: '/images/nordicdark.jpeg',
      },
    ],
  },
  {
    id: 'nature',
    label: 'W Zgodzie z Naturą 🌿',
    filters: [
      {
        id: 'tropical',
        label: 'Tropikalny 🌴',
        prompt: 'tropical design',
        image: '/images/tropical.jpeg',
      },
      {
        id: 'plants',
        label: 'Roślinny 🌱',
        prompt: 'plants design',
        image: '/images/plants.jpeg',
      },
      {
        id: 'army',
        label: 'Zielony 🌲',
        prompt: 'army design',
        image: '/images/army.jpeg',
      },
      {
        id: 'rasta',
        label: 'Reggae 😎',
        prompt: 'rasta design',
        image: '/images/rasta.jpeg',
      },
    ],
  },
  {
    id: 'wood',
    label: 'Style drewniane 🪵',
    filters: [
      {
        id: 'wooden',
        label: 'Drewniany 🌳',
        prompt: 'wood design',
        image: '/images/wooden.jpeg',
      },
      {
        id: 'darkwood',
        label: 'Ciemny drewniany 🤎',
        prompt: 'wood design, dark walls',
        image: '/images/darkwood.jpeg',
      },
    ],
  },
  {
    id: 'special',
    label: 'Style specjalne 🫡',
    filters: [
      {
        id: 'japanese',
        label: 'Japoński 🇯🇵',
        prompt: 'japanese design',
        image: '/images/japanese.jpeg',
      },
      {
        id: 'millionare',
        label: 'Milionera 🤑',
        prompt: 'millionare',
        image: '/images/millionare.jpeg',
      },
      {
        id: 'gaming',
        label: 'Gamingowy 🎮',
        prompt: 'gaming',
        image: '/images/gaming.jpeg',
      },
      {
        id: 'future',
        label: 'Futurystyczny 🚀',
        prompt: 'future design',
        image: '/images/future.jpeg',
      },
    ],
  },
];

export default STYLES;
