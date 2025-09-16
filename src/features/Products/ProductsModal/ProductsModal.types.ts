import type { Product } from '../../../types/product';

export type ProductsModalProps = {
  product: Product | null;
  onClose: (product: Product | null) => void;
};
