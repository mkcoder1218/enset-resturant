export type DishCategory = 'Meat' | 'Vegetarian' | 'Breakfast' | 'Drinks';

export interface Dish {
  id: string;
  name: string;
  nameAm?: string;
  description: string;
  descriptionAm?: string;
  price: number;
  category: DishCategory;
  imageUrl: string;
  spicyLevel?: 0 | 1 | 2 | 3; // 0 = mild, 3 = very hot
  isVegan?: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export type ViewState = 'HOME' | 'MENU' | 'CONTACT';