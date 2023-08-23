"use client";
import { useState } from 'react';
import { message } from 'antd';
const CopyButton = ({ text }: any) => {
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = (text:any) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  };
  const handleCopy = () => {
    // navigator.clipboard.writeText(text);
    copyToClipboard(text)
    setIsCopied(true);
    message.success("Rekening copied to clipboard!");
  };

  return (
    <div>
      <button
        onClick={handleCopy}
        className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-1 px-2 md:py-2 md:px-4 rounded"
      >
        {isCopied ? 'Copied!' : 'Copy'}
      </button>
      {/* {isCopied && <p className="text-green-500">Copied to clipboard!</p>} */}
    </div>
  );
};

export default CopyButton;
