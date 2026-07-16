// Painting data - artwork images in public/art/
// Organized by aspect ratio: squares first, then portrait, then landscape/irregular

export interface Painting {
  title: string;
  medium: string;
  dimensions: string;
  year: string;
  image?: string;
  thumb?: string;
  description?: string;
  featured?: boolean;
}

export const paintings: Painting[] = [
  // Square paintings
  {
    title: 'Wonder',
    medium: 'Acrylic and mixed media on canvas',
    dimensions: '36 x 36 in',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0180.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0180.jpg',
  },
  {
    title: 'Passage',
    medium: 'Acrylic and mixed media on canvas',
    dimensions: '36 x 36 in',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0183.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0183.jpg',
  },
  {
    title: 'Reverie No. 2',
    medium: 'Acrylic and mixed media on canvas',
    dimensions: '50 x 50 in',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0197.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0197.jpg',
  },
  {
    title: 'Camelia',
    medium: 'Acrylic and mixed media on canvas',
    dimensions: '64 x 64 in',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0191.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0191.jpg',
  },
  {
    title: 'Take A Slow Look',
    medium: 'Acrylic and mixed media on canvas',
    dimensions: '64 x 64 in',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0194.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0194.jpg',
  },
  {
    title: 'Composition No. 6',
    medium: 'Acrylic and mixed media on canvas',
    dimensions: '60 x 50 in',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0195.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0195.jpg',
  },
  {
    title: 'Contours',
    medium: 'Acrylic and mixed media on canvas',
    dimensions: '60 x 50 in',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0202.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0202.jpg',
  },
  {
    title: 'Breaking Free',
    medium: 'Acrylic and mixed media on canvas',
    dimensions: '60 x 50 in',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0207.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0207.jpg',
  },
  {
    title: 'Composition No. 9',
    medium: 'Acrylic and mixed media on canvas',
    dimensions: '33 x 32 in',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0211.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0211.jpg',
  },

  // Portrait / Landscape
  {
    title: 'Nightblooming Cereus',
    medium: 'Acrylic and mixed media on canvas',
    dimensions: '40 x 30 in',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0221.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0221.jpg',
  },
  {
    title: 'Blooming',
    medium: 'Acrylic and mixed media on canvas',
    dimensions: '30 x 40 in',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0170.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0170.jpg',
  },
  {
    title: 'Reverie',
    medium: 'Acrylic and mixed media on canvas',
    dimensions: '36 x 36 in',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0188.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0188.jpg',
  },
  {
    title: 'Surfing',
    medium: 'Acrylic and mixed media on canvas',
    dimensions: '40 x 72 in',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0189.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0189.jpg',
  },
];
