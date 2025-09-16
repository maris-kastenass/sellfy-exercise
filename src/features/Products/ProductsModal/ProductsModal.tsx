import { useState } from 'react';
import './ProductsModal.css';

import type { ProductsModalProps } from './ProductsModal.types';

const defaultCopyText = 'Copy Link';

const ProductsModal = ({ product, onClose }: ProductsModalProps) => {
  const [copyText, setCopyText] = useState<string>(defaultCopyText);
  if (!product) return null;

  const copyUrlToClipboard = () => {
    navigator.clipboard.writeText(product.url);
    setCopyText('Coped');
    setTimeout(() => setCopyText(defaultCopyText), 1000);
  };

  return (
    <div className="modal show fade d-block" tabIndex={-1}>
      <div
        className="modal-backdrop fade show"
        onClick={() => onClose(null)}
      ></div>
      <div className="products-modal modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <h6>
              <b>Share your product!</b>
            </h6>
            <div className="border border-2 p-2">
              <img className="w-100" src={product.image_url} />
              <div className="text-primary mt-3">
                <h6>
                  <b>{product.name}</b>
                </h6>
              </div>
              <div>
                <p className="mb-0">{product.description}</p>
              </div>
            </div>
          </div>
          <div className="modal-footer border-0">
            <div className="justify-content-around w-100 d-flex">
              <button
                type="button"
                className="btn btn-outline-primary"
                data-bs-dismiss="modal"
              >
                <i className="bi bi-facebook"></i>
                <span className="ms-2">Share</span>
              </button>
              <button type="button" className="btn btn-outline-info">
                <i className="bi bi-twitter"></i>
                <span className="ms-2">Tweet</span>
              </button>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={copyUrlToClipboard}
              >
                <i className="bi bi-copy"></i>
                <span className="ms-2">{copyText}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsModal;
