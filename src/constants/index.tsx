import type { ItemInterface } from './types';

export const ITEMS: ItemInterface[] = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Work', link: '/work' },
  { name: 'Contact', link: '/contact' },
];

export const PROFILES: ItemInterface[] = [
  { name: 'Software Engineering' },
  { name: 'Full Stack Technology' },
  { name: 'Game Development' },
];

export * from './types';
