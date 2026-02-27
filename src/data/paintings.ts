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
  // ~Square paintings
  {
    title: 'Composition No. 1',
    medium: 'Acrylic on canvas',
    dimensions: '36 x 36 in',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0180.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0180.jpg',
  },
  {
    title: 'Composition No. 2',
    medium: 'Acrylic on canvas',
    dimensions: '36 x 36 in',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0183.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0183.jpg',
  },
  {
    title: 'Composition No. 3',
    medium: 'Acrylic on canvas',
    dimensions: '36 x 36 in',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0188.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0188.jpg',
  },
  {
    title: 'Composition No. 4',
    medium: 'Acrylic on canvas',
    dimensions: '30 x 30 in',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0197.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0197.jpg',
  },
  {
    title: 'Composition No. 5',
    medium: 'Acrylic on canvas',
    dimensions: '30 x 30 in',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0209.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0209.jpg',
  },
  {
    title: 'Composition No. 6',
    medium: 'Acrylic on canvas',
    dimensions: '36 x 36 in',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0213.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0213.jpg',
  },
  {
    title: 'Composition No. 7',
    medium: 'Acrylic on canvas',
    dimensions: '24 x 24 in',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0214.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0214.jpg',
  },
  {
    title: 'Composition No. 8',
    medium: 'Acrylic on canvas',
    dimensions: '36 x 36 in',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0810.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0810.jpg',
  },

  // Slightly tall / near-square
  {
    title: 'Composition No. 9',
    medium: 'Acrylic on canvas',
    dimensions: '30 x 36 in',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0191.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0191.jpg',
  },
  {
    title: 'Composition No. 10',
    medium: 'Acrylic on canvas',
    dimensions: '30 x 36 in',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0194.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0194.jpg',
  },
  {
    title: 'Composition No. 11',
    medium: 'Acrylic on canvas',
    dimensions: '30 x 36 in',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0195.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0195.jpg',
  },
  {
    title: 'Composition No. 12',
    medium: 'Acrylic on canvas',
    dimensions: '30 x 36 in',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0202.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0202.jpg',
  },
  {
    title: 'Composition No. 13',
    medium: 'Acrylic on canvas',
    dimensions: '30 x 36 in',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0205.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0205.jpg',
  },
  {
    title: 'Composition No. 14',
    medium: 'Acrylic on canvas',
    dimensions: '30 x 36 in',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0207.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0207.jpg',
  },
  {
    title: 'Composition No. 15',
    medium: 'Acrylic on canvas',
    dimensions: '30 x 36 in',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0211.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0211.jpg',
  },

  // Portrait
  {
    title: 'Composition No. 16',
    medium: 'Acrylic on canvas',
    dimensions: '24 x 36 in',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0216.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0216.jpg',
  },
  {
    title: 'Composition No. 17',
    medium: 'Acrylic on canvas',
    dimensions: '24 x 36 in',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0221.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0221.jpg',
  },

  // Landscape / irregular
  {
    title: 'Composition No. 18',
    medium: 'Acrylic on canvas',
    dimensions: '36 x 24 in',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0170.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0170.jpg',
  },
  {
    title: 'Composition No. 19',
    medium: 'Acrylic on canvas',
    dimensions: '48 x 20 in',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0189.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0189.jpg',
  },
];
