import { useState } from 'react';
import ProductsRowDropdown from '../ProductsRowDropdown/ProductsRowDropdown';
import ProductsModal from '../ProductsModal/ProductsModal';
import he from 'he';
import './ProductsTable.css';

import type { Product } from '../../../types/product';
import type { ProductsTableProps } from './ProductsTable.types';

const ProductsTable = ({ products, onDelete }: ProductsTableProps) => {
  const [productForModal, setProductForModal] = useState<Product | null>(null);

  // on Share click opens modal
  const onShare = (product: Product | null) => {
    setProductForModal(product);
  };

  return (
    <div>
      {productForModal && (
        <ProductsModal product={productForModal} onClose={setProductForModal} />
      )}
      <table className="products-table table table-responsive-md border w-100">
        <thead>
          <tr className="d-none d-md-table-row">
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
                    alt={product.name}
                    loading="lazy"
                  />
                </div>
              </td>
              <td className="col-md-6 text-start align-content-center">
                <div>
                  <b>{he.decode(product.name)}</b>
                  <p className="mb-0">{he.decode(product.description)}</p>
                </div>
              </td>
              <td data-label="Category" className="align-content-center">
                <b>{he.decode(product.category)}</b>
              </td>
              <td data-label="Price" className="align-content-center">
                <b>${product.price.toFixed(2)}</b>
              </td>
              <td data-label="Actions" className="align-content-center">
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
