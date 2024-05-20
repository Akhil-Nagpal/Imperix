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
import {
  Home,
  About,
  Contact,
  Search,
  Categories,
  SearchCollections,
  SearchPhotos,
  SearchUsers,
  SearchVideos,
} from "./pages/index.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/search" element={<Search />}>
        <Route path="photos" element={<SearchPhotos />} />
        <Route path="photos/:query" element={<SearchPhotos />} />
        <Route path="videos" element={<SearchVideos />} />
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
