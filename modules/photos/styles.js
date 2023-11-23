const STYLES = [
  {
    id: 'free',
    free: true,
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
        id: 'oasis',
        label: 'Oaza zieleni 🪴',
        prompt:
          'Green Oasis, Design an interior with plenty of potted plants. Select diverse species and different-sized pots to create a jungle-like effect indoors. Use stands, hanging shelves, or create green walls to maximize space.',
        image: '/images/oasis.jpeg',
      },
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
    id: 'scandinavian',
    label: 'Style skandynawskie 🇳🇴',
    filters: [
      {
        id: 'boho',
        label: 'Skandynawski Boho 🌿',
        prompt:
          'Scandinavian Interior with Boho Accents: Combine the simplicity of Scandinavian style with colorful and ethnic Boho accents. Use light wall colors and furniture, then add rich patterns, soft rugs, and handmade accessories.',
        image: '/images/boho.jpeg',
      },
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
      {
        id: 'artistic',
        label: 'Dusza Artysty 🧑‍🎨',
        prompt:
          'Artistic Space, Create an interior inspired by art, where walls serve as a gallery for your favorite pieces. Use muted colors on the walls to emphasize the artworks. You can also add a focal point spotlighting a selected painting',
        image: '/images/artistic.jpeg',
      },
    ],
  },
];

export default STYLES;
