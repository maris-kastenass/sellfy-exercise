import he from 'he';
import CopyUrlButton from '../../../components/CopyButton/CopyUrlButton';
import './ProductsModal.css';

import type { ProductsModalProps } from './ProductsModal.types';

const ProductsModal = ({ product, onClose }: ProductsModalProps) => {
  if (!product) return null;

  return (
    <div className="modal show fade d-block" tabIndex={-1} role="dialog">
      <div
        className="modal-backdrop fade show"
        onClick={() => onClose(null)}
      ></div>
      <div
        className="products-modal modal-dialog modal-dialog-centered"
        aria-modal="true"
        aria-labelledby="products modal"
      >
        <div className="modal-content">
          <div className="modal-body">
            <h6>
              <strong>Share your product!</strong>
            </h6>
            <div className="border border-2 p-2">
              <img
                className="products-modal-img"
                src={product.image_url}
                alt={product.name}
                loading="lazy"
              />
              <div className="text-primary mt-3">
                <h6>
                  <b>{he.decode(product.name)}</b>
                </h6>
              </div>
              <div>
                <p className="mb-0">{he.decode(product.description)}</p>
              </div>
            </div>
          </div>
          <div className="modal-footer border-0">
            <div className="justify-content-around w-100 d-flex">
              <button
                type="button"
                className="btn btn-outline-primary"
                aria-label="Share on Facebook"
              >
                <i className="bi bi-facebook"></i>
                <span className="ms-2">Share</span>
              </button>
              <button
                type="button"
                className="btn btn-outline-info"
                aria-label="Tweet on twitter"
              >
                <i className="bi bi-twitter"></i>
                <span className="ms-2">Tweet</span>
              </button>
              <CopyUrlButton url={product.url} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsModal;
