"use client";

import { useState } from "react";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="text-sm px-4 py-2 border border-gray-200 rounded hover:border-gray-400 text-gray-500 hover:text-gray-900 transition-colors"
    >
      {copied ? "Copied!" : "Copy to share"}
    </button>
  );
}
