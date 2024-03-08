export const FILTERS = [
  {
    id: 'free',
    label: 'Special Styles 💎',
    filters: [
      {
        id: 'golden',
        label: 'Złota elegancja 🥇',
        prompt:
          'raw wooden floor, dark walls, yellow lightbulbs, minimalistic design, some golden elements',
        image: '/golden.jpeg',
      },
      {
        id: 'winter',
        label: 'Zimowy 🎄',
        prompt:
          'cozy winter vibes, snow and ice accents, but warm aesthetic, red elements, dark gray walls',
        image: '/winter.jpeg',
      },
    ],
  },
  {
    id: 'new',
    label: 'Recently Added 🆕',
    filters: [
      {
        popular: true,
        id: 'modernstudio',
        label: 'Modne studio 😎',
        prompt:
          'yellow decorate lightbulbs, dark gray walls, raw wooden floor and raw wooden elements with black accents',
        image: '/modernstudio.jpeg',
      },
      {
        id: 'forestgreen',
        label: 'Zielony las 🌲',
        prompt:
          'some plants, little forest-green accents, korean style, modern design, dark grey furniture',
        image: '/forestgreen.jpeg',
      },
      {
        id: 'marshall',
        label: 'Skórzano - wegański 🌱',
        prompt: 'plants, leather marshall design, black and golden accents',
        image: '/marshall.jpeg',
      },
      {
        id: 'neon',
        popular: true,
        label: 'Modne neony 🩷',
        prompt:
          'neon accents, classic dark design, white walls, ambient lighting',
        image: '/neons.jpeg',
      },
      {
        id: 'oceanic',
        label: 'Oceaniczny niebieski 🐳',
        prompt:
          'bottom ambient lighting, dark space grey walls, wooden furniture with blue vibes',
        image: '/oceanic.jpeg',
      },
    ],
  },
  {
    id: 'classic',
    label: 'Klasyczne stylee 💁‍♂️',
    filters: [
      {
        id: 'golden',
        label: 'Złota elegancja 🥇',
        prompt:
          'raw wooden floor, dark walls, yellow lightbulbs, minimalistic design, some golden elements',
        image: '/golden.jpeg',
      },
      {
        id: 'winter',
        label: 'Zimowy 🎄',
        prompt:
          'cozy winter vibes, snow and ice accents, but warm aesthetic, red elements, dark gray walls',
        image: '/winter.jpeg',
      },
      {
        id: 'default',
        hidden: true,
        free: true,
        popular: true,
        label: 'Pomarańczowy 🍊',
        prompt:
          'black doors and window frames, modern look with orange accents',
        image: '/default.jpeg',
      },
      {
        id: 'modern',
        label: 'Modernistyczny ✌️',
        prompt: 'modern design',
        image: '/modern.jpeg',
      },

      {
        id: 'cozydark',
        label: 'Przytulny ciemny ✨',
        prompt: 'cozy design',
        image: '/cozydark.jpeg',
      },
      {
        id: 'industrial',
        label: 'Industrialny 🏗️',
        prompt: 'industrial design',
        image: '/industrial.jpeg',
      },
      {
        id: 'vintage',
        label: 'Vintage 📜',
        prompt: 'vintage design',
        image: '/vintage.jpeg',
      },
    ],
  },

  {
    id: 'trends',
    label: 'Trendy 2024 🔥',
    filters: [
      {
        id: 'midcentury',
        popular: true,
        label: 'Mid-century 🗿',
        prompt: 'midcentury modern',
        image: '/midcentury.jpeg',
      },
      {
        id: 'stone',
        label: 'Kamienny 🗿',
        prompt: 'organic stone design',
        image: '/stone.jpeg',
      },
      {
        id: 'marble',
        popular: true,
        label: 'Marmur 🪨',
        prompt:
          'raw natural materials, dramatic, colorful marble, wooden ceiling, dark walls',
        image: '/marble.jpeg',
      },
      {
        id: 'maximalist',
        label: 'Maksymalista ♾️',
        prompt: 'modern maximalism',
        image: '/maximalist.jpeg',
      },
    ],
  },
  {
    id: 'scandinavian',
    label: 'Scandinavian designs 🇳🇴',
    filters: [
      {
        id: 'boho',
        label: 'Skandynawskie Boho 🌿',
        prompt:
          'Scandinavian Interior with Boho Accents: Combine the simplicity of Scandinavian style with colorful and ethnic Boho accents. Use light wall colors and furniture, then add rich patterns, soft rugs, and handmade accessories.',
        image: '/boho.jpeg',
      },
      {
        id: 'ikea',
        label: 'Szwedzki 🇸🇪',
        prompt: 'ikea design',
        image: '/ikea.jpeg',
      },
      {
        id: 'nordicdark',
        label: 'Skandynawski ciemny ♠️',
        prompt: 'scandinavian dark design',
        image: '/nordicdark.jpeg',
      },
    ],
  },
  {
    id: 'nature',
    label: 'Ekologiczne 🌿',
    filters: [
      {
        id: 'tropical',
        label: 'Tropikalny 🌴',
        prompt: 'tropical design',
        image: '/tropical.jpeg',
      },
      {
        id: 'plants',
        label: 'Roślinny 🌱',
        prompt: 'plants design',
        image: '/plants.jpeg',
      },
      {
        id: 'army',
        label: 'Zielony 🌲',
        prompt: 'army design',
        image: '/army.jpeg',
      },
      {
        id: 'rasta',
        label: 'Reggae 😎',
        prompt: 'rasta design',
        image: '/rasta.jpeg',
      },
    ],
  },
  {
    id: 'special',
    label: 'Specjalne style 🫡',
    filters: [
      {
        id: 'japanese',
        label: 'Japoński 🇯🇵',
        prompt: 'japanese design',
        image: '/japanese.jpeg',
      },
      {
        id: 'millionare',
        label: 'Na Milionera 🤑',
        prompt: 'millionare',
        image: '/millionare.jpeg',
      },
      {
        id: 'gaming',
        label: 'Gamingowy 🎮',
        prompt: 'gaming',
        image: '/gaming.jpeg',
      },
      {
        id: 'artistic',
        label: 'Artystyczny 🧑‍🎨',
        prompt:
          'Artistic Space, Create an interior inspired by art, where walls serve as a gallery for your favorite pieces. Use muted colors on the walls to emphasize the artworks. You can also add a focal point spotlighting a selected painting',
        image: '/artistic.jpeg',
      },
    ],
  },
];

export const MODES = [
  'Room',
  'Living room',
  'Bedroom',
  'Kitchen',
  'Bathroom',
  'Home office',
  'Gaming room',
  'Study room',
  'Office',
  'Building',
  'House',
];

export const MODELS = [
  {
    id: 'arrange',
    name: 'Arrange',
    version: '9e0b15ac47a5a6502175cfab3853d88413f4fd4bee8da0509deb0895db96d0a7',
  },
  {
    id: 'makeover',
    name: 'Makeover',
    version: '8a89b0ab59a050244a751b6475d91041a8582ba33692ae6fab65e0c51b700328',
  },
];
