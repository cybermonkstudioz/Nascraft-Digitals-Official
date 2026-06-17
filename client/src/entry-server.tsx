import React from "react";
import ReactDOMServer from "react-dom/server";
import { ThemeProvider } from "./contexts/ThemeContext";
import { TooltipProvider } from "./components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";

// Statically import page components to avoid dynamic SSR hydration issues
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import Academy from "./pages/Academy";
import NotFound from "./pages/NotFound";

import { Router } from "wouter";

export function render(url: string) {
  // Resolve component matching for the route
  let PageComponent = Home;
  if (url === "/services") PageComponent = Services;
  else if (url === "/portfolio") PageComponent = Portfolio;
  else if (url === "/about") PageComponent = About;
  else if (url === "/contact") PageComponent = Contact;
  else if (url === "/booking") PageComponent = Booking;
  else if (url === "/academy") PageComponent = Academy;
  else if (url !== "/") PageComponent = NotFound;

  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <ErrorBoundary>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Router ssrPath={url}>
              <PageComponent />
            </Router>
          </TooltipProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </React.StrictMode>
  );

  return html;
}
