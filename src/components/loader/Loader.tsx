import React, { useState } from "react";

const Loader = () => {
  const [show, setShow] = useState<boolean>(true);
  if (show) {
    return (
      <div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 rounded-full animate-pulse bg-slate-300"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-slate-300"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-slate-300"></div>
      </div>
    );
  }
  return <React.Fragment />;
};

export default Loader;
