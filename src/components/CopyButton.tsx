import { useState } from "react";
import { Clipboard, CheckCircle } from "lucide-react";

export const CopyButton = ({ textToCopy }: { textToCopy: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <button
      onClick={copyToClipboard}
      className={`px-3 py-1 rounded flex items-center gap-1 text-sm transition-colors ${
        copied
          ? "bg-green-100 text-green-600 border border-green-300"
          : "bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300"
      }`}
    >
      {copied ? (
        <>
          <CheckCircle size={16} />
          <span>Copied</span>
        </>
      ) : (
        <>
          <Clipboard size={16} />
          <span>Copy</span>
        </>
      )}
    </button>
  );
};
