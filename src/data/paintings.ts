// Painting data - artwork images in public/art/
// Image paths use the base path: '/kblivaudaisArt/art/filename.jpg'
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
  // ~Square paintings (rows 1-4, 3 per row)
  {
    title: 'Untitled I',
    medium: 'Acrylic on canvas',
    dimensions: '',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0180.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0180.jpg', // 5431x5454
  },
  {
    title: 'Untitled II',
    medium: 'Acrylic on canvas',
    dimensions: '',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0183.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0183.jpg', // 5447x5421
  },
  {
    title: 'Untitled III',
    medium: 'Acrylic on canvas',
    dimensions: '',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0188.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0188.jpg', // 5556x5475
  },
  {
    title: 'Untitled IV',
    medium: 'Acrylic on canvas',
    dimensions: '',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0197.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0197.jpg', // 4949x4898
  },
  {
    title: 'Untitled V',
    medium: 'Acrylic on canvas',
    dimensions: '',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0209.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0209.jpg', // 4824x4826
  },
  {
    title: 'Untitled VI',
    medium: 'Acrylic on canvas',
    dimensions: '',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0213.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0213.jpg', // 5803x5814
  },
  {
    title: 'Untitled VII',
    medium: 'Acrylic on canvas',
    dimensions: '',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0214.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0214.jpg', // 3078x3123
  },
  {
    title: 'Untitled VIII',
    medium: 'Acrylic on canvas',
    dimensions: '',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0810.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0810.jpg', // 5304x5295
  },

  // Slightly tall / near-square paintings
  {
    title: 'Untitled IX',
    medium: 'Acrylic on canvas',
    dimensions: '',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0191.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0191.jpg', // 5395x5898
  },
  {
    title: 'Untitled X',
    medium: 'Acrylic on canvas',
    dimensions: '',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0194.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0194.jpg', // 5379x5675
  },
  {
    title: 'Untitled XI',
    medium: 'Acrylic on canvas',
    dimensions: '',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0195.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0195.jpg', // 5190x5758
  },
  {
    title: 'Untitled XII',
    medium: 'Acrylic on canvas',
    dimensions: '',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0202.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0202.jpg', // 5543x5796
  },
  {
    title: 'Untitled XIII',
    medium: 'Acrylic on canvas',
    dimensions: '',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0205.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0205.jpg', // 5327x5900
  },
  {
    title: 'Untitled XIV',
    medium: 'Acrylic on canvas',
    dimensions: '',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0207.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0207.jpg', // 4874x5262
  },
  {
    title: 'Untitled XV',
    medium: 'Acrylic on canvas',
    dimensions: '',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0211.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0211.jpg', // 4688x4998
  },

  // Portrait paintings
  {
    title: 'Untitled XVI',
    medium: 'Acrylic on canvas',
    dimensions: '',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0216.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0216.jpg', // 3040x4198
  },
  {
    title: 'Untitled XVII',
    medium: 'Acrylic on canvas',
    dimensions: '',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0221.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0221.jpg', // 3107x4348
  },

  // Landscape / irregular
  {
    title: 'Untitled XVIII',
    medium: 'Acrylic on canvas',
    dimensions: '',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0170.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0170.jpg', // 5545x4036 landscape
  },
  {
    title: 'Untitled XIX',
    medium: 'Acrylic on canvas',
    dimensions: '',
    year: '2024',
    image: '/kblivaudaisArt/art/IMG_0189.jpg',
    thumb: '/kblivaudaisArt/art/thumbs/IMG_0189.jpg', // 6148x2612 wide landscape
  },
];
