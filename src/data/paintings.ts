// Painting data - replace with real artwork info and images
// Images go in public/art/ folder
// Set image to the path like '/kblivaudaisArt/art/painting-name.jpg'

export interface Painting {
  title: string;
  medium: string;
  dimensions: string;
  year: string;
  image?: string; // path to image in public/art/
  description?: string;
}

export const paintings: Painting[] = [
  {
    title: 'Untitled I',
    medium: 'Acrylic on canvas',
    dimensions: '24" × 30"',
    year: '2024',
    image: undefined, // Replace with: '/kblivaudaisArt/art/untitled-1.jpg'
    description: '',
  },
  {
    title: 'Untitled II',
    medium: 'Acrylic on canvas',
    dimensions: '36" × 48"',
    year: '2024',
    image: undefined,
    description: '',
  },
  {
    title: 'Untitled III',
    medium: 'Oil on canvas',
    dimensions: '30" × 40"',
    year: '2024',
    image: undefined,
    description: '',
  },
  {
    title: 'Untitled IV',
    medium: 'Mixed media on canvas',
    dimensions: '24" × 24"',
    year: '2023',
    image: undefined,
    description: '',
  },
  {
    title: 'Untitled V',
    medium: 'Acrylic on canvas',
    dimensions: '40" × 30"',
    year: '2023',
    image: undefined,
    description: '',
  },
  {
    title: 'Untitled VI',
    medium: 'Oil on canvas',
    dimensions: '36" × 36"',
    year: '2023',
    image: undefined,
    description: '',
  },
];
