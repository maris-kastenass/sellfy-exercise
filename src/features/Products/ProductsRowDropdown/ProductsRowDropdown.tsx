import DropdownIconButton from '../../../components/DropdownIconButton/DropdownIconButton';
import type { ProductsRowDropdownProps } from './ProductsRowDropdown.types';
import './ProductsRowDropdown.css';

const ProductsRowDropdown = ({
  productId,
  onShareClick,
  onDeleteClick,
}: ProductsRowDropdownProps) => {
  const dropdownId = 'dropdownIconButton-' + productId;

  return (
    <div className="dropstart dropdown-on-icon-button">
      <DropdownIconButton id={dropdownId} />
      <ul
        className="dropdown-menu dropdown-on-icon-button-menu"
        aria-labelledby={dropdownId}
      >
        <li>
          <button
            type="button"
            className="dropdown-item btn btn-white back-button d-flex w-100"
            onClick={onShareClick}
            aria-label="Delete row"
          >
            <i className="bi bi-share-fill"></i>
            <span className="ms-2">Share</span>
          </button>
        </li>
        <li>
          <button
            type="button"
            className="dropdown-item btn btn-white back-button d-flex text-danger w-100"
            onClick={onDeleteClick}
            aria-label="Delete row"
          >
            <i className="bi bi-trash3-fill"></i>
            <span className="ms-2">Delete</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ProductsRowDropdown;
