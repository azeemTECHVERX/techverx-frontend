// Libraries
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
// Componentss
import App from "./App";
// Context
import { UserProvider } from "./context/UserContext";
// Stylesheet
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
export const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <UserProvider>
      <Router>
        <App />
      </Router>
    </UserProvider>
  </QueryClientProvider>
);
