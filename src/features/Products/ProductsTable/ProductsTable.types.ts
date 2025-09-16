import type { Product } from '../../../types/product';

export type ProductsTableProps = {
  products: Product[];
  onDelete: (id: string) => void;
};
