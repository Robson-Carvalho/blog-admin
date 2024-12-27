import "./index.css";

import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router";

import { ThemeProvider } from "./components/theme-provider.tsx";
import { Home } from "./pages/home/index.tsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root as HTMLElement).render(
  <BrowserRouter>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
);
