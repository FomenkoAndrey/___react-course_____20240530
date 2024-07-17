import { ProductInterface } from '../types/Product.interface.ts'

export const PRODUCT_CATEGORIES: string[] = [
  'Laptops',
  'Smartphones',
  'Cameras',
  'Headphones',
  'Accessories',
  'Software',
  'Monitors',
  'Graphics Cards'
]

export const INITIAL_PRODUCT: Partial<ProductInterface> = {
  name: 'AMD Radeon RX 7800 XT Graphics Card',
  description:
    'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
  price: '386.00',
  image: 'https://loremflickr.com/640/480/random',
  category: 'Graphics Cards'
}
