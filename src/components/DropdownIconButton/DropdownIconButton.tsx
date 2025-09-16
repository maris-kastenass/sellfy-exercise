import './DropdownIconButton.css';
import type { DropdownIconButtonProps } from './DropdownIconButton.types';

const DropdownIconButton = ({
  id,
  iconSrc = '/three-dots-vertical.svg',
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
      <img src={iconSrc} alt="icon" className="pb-1" />
    </button>
  );
};

export default DropdownIconButton;
