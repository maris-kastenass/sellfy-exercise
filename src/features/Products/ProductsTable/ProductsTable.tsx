import { useState } from 'react';
import ProductsRowDropdown from '../ProductsRowDropdown/ProductsRowDropdown';
import ProductsModal from '../ProductsModal/ProductsModal';
import './ProductsTable.css';

import type { Product } from '../../../types/product';
import type { ProductsTableProps } from './ProductsTable.types';

const ProductsTable = ({ products, onDelete }: ProductsTableProps) => {
  const [productForModal, setProductForModal] = useState<Product | null>(null);

  const onShare = (product: Product | null) => {
    console.log('products click', product);
    setProductForModal(product);
  };

  return (
    <div className="ProductsTable">
      {productForModal && (
        <ProductsModal product={productForModal} onClose={setProductForModal} />
      )}
      <table className="table border">
        <thead>
          <tr>
            <th
              scope="col"
              colSpan={2}
              className="text-start product-table-header-text"
            >
              Product
            </th>
            <th scope="col" className="product-table-header-text">
              Category
            </th>
            <th scope="col" className="product-table-header-text">
              Price
            </th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: Product) => (
            <tr key={product._id}>
              <td>
                <div className="bg-body-secondary">
                  <img
                    className="product-table-image"
                    src={product.image_url}
                  />
                </div>
              </td>
              <td className="col-md-6 text-start align-content-center">
                <b>{product.name}</b>
                <p className="mb-0">{product.description}</p>
              </td>
              <td className="align-content-center">
                <b>{product.category}</b>
              </td>
              <td className="align-content-center">
                <b>${product.price.toFixed(2)}</b>
              </td>
              <td className="align-content-center">
                <ProductsRowDropdown
                  productId={product._id}
                  onShareClick={() => {
                    onShare(product);
                  }}
                  onDeleteClick={() => {
                    onDelete(product._id);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
