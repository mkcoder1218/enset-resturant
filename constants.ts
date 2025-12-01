import { Dish } from './types';

export const MENU_ITEMS: Dish[] = [
  {
    id: '1',
    name: 'Doro Wat',
    nameAm: 'ዶሮ ወጥ',
    description: 'The national dish of Ethiopia. Tender chicken leg simmered in a spicy berbere sauce, served with a hard-boiled egg.',
    descriptionAm: 'የኢትዮጵያ ብሄራዊ ምግብ። በቅመም በርበሬ ወጥ የተሰራ የዶሮ ስጋ ከእንቁላል ጋር።',
    price: 18.99,
    category: 'Meat',
    imageUrl: 'https://picsum.photos/seed/dorowat/400/300',
    spicyLevel: 3
  },
  {
    id: '2',
    name: 'Special Kitfo',
    nameAm: 'ልዩ ክትፎ',
    description: 'Lean minced beef seasoned with mitmita and niter kibbeh (spiced clarified butter). Served raw, rare, or well done.',
    descriptionAm: 'በሚጥሚጣ እና በንጥር ቅቤ የተለወሰ ቀይ ስጋ። ጥሬ፣ ለብ ያለ ወይም በደንብ የተጠበሰ።',
    price: 21.50,
    category: 'Meat',
    imageUrl: 'https://picsum.photos/seed/kitfo/400/300',
    spicyLevel: 2
  },
  {
    id: '3',
    name: 'Vegetarian Combo (Beyaynetu)',
    nameAm: 'የጾም በያይነቱ',
    description: 'A vibrant platter of spicy lentils, yellow split peas, collard greens, cabbage, and shiro wat.',
    descriptionAm: 'የተለያዩ የጾም ወጦች ስብስብ። ምስር፣ ክክ፣ ጎመን፣ ጥቅል ጎመን እና ሽሮ።',
    price: 16.99,
    category: 'Vegetarian',
    imageUrl: 'https://picsum.photos/seed/veggie/400/300',
    spicyLevel: 1,
    isVegan: true
  },
  {
    id: '4',
    name: 'Tibs (Beef or Lamb)',
    nameAm: 'ጥብስ (የበሬ ወይም የበግ)',
    description: 'Sautéed meat chunks with onions, garlic, jalapeño, and rosemary. Sizzling and savory.',
    descriptionAm: 'በሽንኩርት፣ ነጭ ሽንኩርት፣ ቃሪያ እና ሮዝመሪ የተጠበሰ ስጋ።',
    price: 19.99,
    category: 'Meat',
    imageUrl: 'https://picsum.photos/seed/tibs/400/300',
    spicyLevel: 2
  },
  {
    id: '5',
    name: 'Shiro Wat',
    nameAm: 'ሽሮ ወጥ',
    description: 'Smooth, nutty chickpea stew simmered with garlic and onions. A comforting classic.',
    descriptionAm: 'ከሽንኩርት እና ነጭ ሽንኩርት ጋር የተሰራ የሽሮ ወጥ።',
    price: 14.50,
    category: 'Vegetarian',
    imageUrl: 'https://picsum.photos/seed/shiro/400/300',
    spicyLevel: 1,
    isVegan: true
  },
  {
    id: '6',
    name: 'Ethiopian Coffee Ceremony',
    nameAm: 'የቡና ቁርስ',
    description: 'Traditional freshly roasted coffee, brewed in a jebena and served with popcorn.',
    descriptionAm: 'በጀበና የተፈላ ባህላዊ ቡና ከፈንድሻ ጋር።',
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