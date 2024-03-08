const STYLES = [
  {
    id: 'free',
    free: true,
    label: 'FREE Designs 🤑',
    filters: [
      {
        id: 'default',
        label: 'Neutral 😌',
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
    label: 'Classics 💁‍♂️',
    filters: [
      {
        id: 'oasis',
        label: 'Green Oasis 🪴',
        prompt:
          'Green Oasis, Design an interior with plenty of potted plants. Select diverse species and different-sized pots to create a jungle-like effect indoors. Use stands, hanging shelves, or create green walls to maximize space.',
        image: '/images/oasis.jpeg',
      },
      {
        id: 'modern',
        label: 'Modern ✌️',
        prompt: 'modern design',
        image: '/images/modern.jpeg',
      },
      {
        id: 'cozy',
        label: 'Cosy 🧸',
        prompt: 'cozy design',
        image: '/images/cozy.jpeg',
      },
      {
        id: 'cozydark',
        label: 'Cosy dark ✨',
        prompt: 'cozy design',
        image: '/images/cozydark.jpeg',
      },
      {
        id: 'industrial',
        label: 'Industrial 🏗️',
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
    label: '2023 Trends 🔥',
    filters: [
      {
        id: 'midcentury',
        label: 'Mid-century 🗿',
        prompt: 'midcentury modern',
        image: '/images/midcentury.jpeg',
      },
      {
        id: 'stone',
        label: 'Stone 🗿',
        prompt: 'organic stone design',
        image: '/images/stone.jpeg',
      },
      {
        id: 'marble',
        label: 'Marble 🪨',
        prompt:
          'raw natural materials, dramatic, colorful marble, wooden ceiling, dark walls',
        image: '/images/marble.jpeg',
      },
      {
        id: 'maximalist',
        label: 'Maximalist ♾️',
        prompt: 'modern maximalism',
        image: '/images/maximalist.jpeg',
      },
      {
        id: 'transparent',
        label: 'Glass 🧊',
        prompt: 'transparent, glassy design',
        image: '/images/transparent.jpeg',
      },
    ],
  },
  {
    id: 'scandinavian',
    label: 'Scandinavian 🇳🇴',
    filters: [
      {
        id: 'boho',
        label: 'Scandinavian Boho 🌿',
        prompt:
          'Scandinavian Interior with Boho Accents: Combine the simplicity of Scandinavian style with colorful and ethnic Boho accents. Use light wall colors and furniture, then add rich patterns, soft rugs, and handmade accessories.',
        image: '/images/boho.jpeg',
      },
      {
        id: 'ikea',
        label: 'Swedish 🇸🇪',
        prompt: 'ikea design',
        image: '/images/ikea.jpeg',
      },
      {
        id: 'scandinavian',
        label: 'Scandinavian 👌',
        prompt: 'scandinavian',
        image: '/images/scandinavian.jpeg',
      },
      {
        id: 'nordicdark',
        label: 'Scandinavian dark ♠️',
        prompt: 'scandinavian dark design',
        image: '/images/nordicdark.jpeg',
      },
    ],
  },
  {
    id: 'nature',
    label: 'Eco 🌿',
    filters: [
      {
        id: 'tropical',
        label: 'Tropical 🌴',
        prompt: 'tropical design',
        image: '/images/tropical.jpeg',
      },
      {
        id: 'plants',
        label: 'Plant 🌱',
        prompt: 'plants design',
        image: '/images/plants.jpeg',
      },
      {
        id: 'army',
        label: 'Green 🌲',
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
        label: 'Wooden 🌳',
        prompt: 'wood design',
        image: '/images/wooden.jpeg',
      },
      {
        id: 'darkwood',
        label: 'Wooden dark 🤎',
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
        label: 'Japanese 🇯🇵',
        prompt: 'japanese design',
        image: '/images/japanese.jpeg',
      },
      {
        id: 'millionare',
        label: 'Millionare 🤑',
        prompt: 'millionare',
        image: '/images/millionare.jpeg',
      },
      {
        id: 'gaming',
        label: 'Gaming 🎮',
        prompt: 'gaming',
        image: '/images/gaming.jpeg',
      },
      {
        id: 'future',
        label: 'Future 🚀',
        prompt: 'future design',
        image: '/images/future.jpeg',
      },
      {
        id: 'artistic',
        label: 'Artistic Space 🧑‍🎨',
        prompt:
          'Artistic Space, Create an interior inspired by art, where walls serve as a gallery for your favorite pieces. Use muted colors on the walls to emphasize the artworks. You can also add a focal point spotlighting a selected painting',
        image: '/images/artistic.jpeg',
      },
    ],
  },
];

export default STYLES;
