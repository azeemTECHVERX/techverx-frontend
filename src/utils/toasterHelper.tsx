import React from "react";
import { NavigateFunction } from "react-router-dom";
const ToasterHelper = (
  toast: any,
  message: string,
  navigator: NavigateFunction,
  type: string
) => {
  if (type == "success") {
    toast.success(message, {
      id: "clipboard",
    });
  }

  setTimeout(() => {
    navigator("/");
  }, 500);
  return <React.Fragment />;
};

export default ToasterHelper;
