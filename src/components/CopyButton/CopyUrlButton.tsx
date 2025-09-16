import { useState } from 'react';
import './CopyUrlButton.css';

import type { CopyUrlButtonProps } from './CopyUrlButton.types';

const defaultCopyText = 'Copy Link';

const CopyUrlButton = ({ url }: CopyUrlButtonProps) => {
  const [copyText, setCopyText] = useState<string>(defaultCopyText);

  const copyUrlToClipboard = async () => {
    await navigator.clipboard.writeText(url);
    // Change button text
    setCopyText('Copied');
    // After 1 sec. change button text back to default
    const timeoutId = setTimeout(() => setCopyText(defaultCopyText), 1000);

    return () => clearTimeout(timeoutId);
  };

  return (
    <button
      type="button"
      className="btn btn-outline-primary"
      onClick={copyUrlToClipboard}
    >
      <i className="bi bi-copy"></i>
      <span className="ms-2">{copyText}</span>
    </button>
  );
};

export default CopyUrlButton;
