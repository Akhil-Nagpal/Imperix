import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Root from "./layout/Root.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Search from "./pages/Search.jsx";
import Categories from "./pages/Categories.jsx";
import Contact from "./pages/Contact.jsx";
import SearchPhotos from "./pages/SearchPhotos";
import SearchIllustrations from "./pages/SearchIllustrations";
import SearchCollections from "./pages/SearchCollections";
import SearchUsers from "./pages/SearchUsers.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/search" element={<Search />}>
        <Route path="photos" element={<SearchPhotos />} />
        <Route path="illustrations" element={<SearchIllustrations />} />
        <Route path="collections" element={<SearchCollections />} />
        <Route path="users" element={<SearchUsers />} />
      </Route>
      <Route path="/contact" element={<Contact />} />
      <Route path="/categories" element={<Categories />} />
    </Route>
  )
);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
