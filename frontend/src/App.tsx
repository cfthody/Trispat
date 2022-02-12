/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Collections from "./components/Collections/Collections";
import Navigation, { INavLink } from "./components/NavBar/Navigation";
import { Shop } from "./pages/Shop/Shop";
import "./main.scss";

const getNavigationItems = (): Array<INavLink> => [
  {
    to: "/",
    text: "HomePage",
  },
  {
    to: "collections/shop",
    text: "teste",
  },
];

export function App() {
  return (
    <>
      <Navigation links={getNavigationItems()} activeClassName="nav-link-active" />
      {/* //todo: this will be start page with promo and etc */}
      <Routes>
        <Route path="/" element={<h1>home</h1>} />
        <Route path="/collections" element={<Collections />}>
          <Route path="shop" element={<Shop />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Page Not Found!</p>
            </main>
          }
        />
      </Routes>
    </>
  );
}

export default App;
