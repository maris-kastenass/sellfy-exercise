import './DropdownIconButton.css';
import type { DropdownIconButtonProps } from './DropdownIconButton.types';

const DropdownIconButton = ({
  id,
  icon = 'three-dots-vertical',
}: DropdownIconButtonProps) => {
  return (
    <button
      type="button"
      className="btn btn-white dropdown-icon-button"
      id={id}
      data-bs-toggle="dropdown"
      aria-expanded="false"
      aria-label="Dropdown menu"
      data-bs-auto-close="true"
    >
      <i className={`bi bi-${icon}`}></i>
    </button>
  );
};

export default DropdownIconButton;
