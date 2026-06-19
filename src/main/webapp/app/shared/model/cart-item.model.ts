import { ICart } from 'app/shared/model/cart.model';
import { IProduct } from 'app/shared/model/product.model';

export interface ICartItem {
  id?: string;
  quantity?: number;
  product?: IProduct;
  cart?: ICart;
}

export const defaultValue: Readonly<ICartItem> = {};
