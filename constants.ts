import { Dish } from './types';

export const MENU_ITEMS: Dish[] = [
  {
    id: '1',
    name: 'Doro Wat',
    description: 'The national dish of Ethiopia. Tender chicken leg simmered in a spicy berbere sauce, served with a hard-boiled egg.',
    price: 18.99,
    category: 'Meat',
    imageUrl: 'https://picsum.photos/seed/dorowat/400/300',
    spicyLevel: 3
  },
  {
    id: '2',
    name: 'Special Kitfo',
    description: 'Lean minced beef seasoned with mitmita and niter kibbeh (spiced clarified butter). Served raw, rare, or well done.',
    price: 21.50,
    category: 'Meat',
    imageUrl: 'https://picsum.photos/seed/kitfo/400/300',
    spicyLevel: 2
  },
  {
    id: '3',
    name: 'Vegetarian Combo (Beyaynetu)',
    description: 'A vibrant platter of spicy lentils, yellow split peas, collard greens, cabbage, and shiro wat.',
    price: 16.99,
    category: 'Vegetarian',
    imageUrl: 'https://picsum.photos/seed/veggie/400/300',
    spicyLevel: 1,
    isVegan: true
  },
  {
    id: '4',
    name: 'Tibs (Beef or Lamb)',
    description: 'Sautéed meat chunks with onions, garlic, jalapeño, and rosemary. Sizzling and savory.',
    price: 19.99,
    category: 'Meat',
    imageUrl: 'https://picsum.photos/seed/tibs/400/300',
    spicyLevel: 2
  },
  {
    id: '5',
    name: 'Shiro Wat',
    description: 'Smooth, nutty chickpea stew simmered with garlic and onions. A comforting classic.',
    price: 14.50,
    category: 'Vegetarian',
    imageUrl: 'https://picsum.photos/seed/shiro/400/300',
    spicyLevel: 1,
    isVegan: true
  },
  {
    id: '6',
    name: 'Ethiopian Coffee Ceremony',
    description: 'Traditional freshly roasted coffee, brewed in a jebena and served with popcorn.',
    price: 12.00,
    category: 'Drinks',
    imageUrl: 'https://picsum.photos/seed/coffee/400/300',
    spicyLevel: 0
  },
];

export const NAV_LINKS = [
  { label: 'Home', value: 'HOME' },
  { label: 'Menu', value: 'MENU' },
  { label: 'Contact', value: 'CONTACT' },
];