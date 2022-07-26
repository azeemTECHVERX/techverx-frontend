// Libraries
import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="w-4 h-4 rounded-full animate-pulse bg-slate-300"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-slate-300"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-slate-300"></div>
    </div>
  );
};

export default Loader;
