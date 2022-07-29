// Libraries
import React from "react";

interface ErrorBannerProps {
  msg: string;
}

const FormErrorBanner: React.FC<ErrorBannerProps> = ({ msg }) => {
  return (
    <div className="bg-slate-300 mt-2 border-l-4 border-red-500 text-red-600 p-2">
      <p className="text-sm">{msg}</p>
    </div>
  );
};

export default FormErrorBanner;
