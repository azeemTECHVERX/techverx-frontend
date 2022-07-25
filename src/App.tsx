// Librariess
import React from "react";
import { Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// Components
import Home from "./pages/Home";
// Pages
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
// Contexts
import { UserProvider } from "./context/UserContext";
const App: React.FC = () => {
  const queryClient = new QueryClient();
  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <div className="w-screen h-screen ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </UserProvider>
  );
};

export default App;
