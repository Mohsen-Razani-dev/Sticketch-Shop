import React, { lazy } from "react";
import AuthenticatedComponent from "../Component/Auth/AuthenticatedComponent";

const Home = lazy(() => {
  return Promise.all([
    import("../Component/Home/Home"),
    new Promise(resolve => setTimeout(resolve, 100))
  ]).then(([moduleExports]) => moduleExports);
});
const Stickers = lazy(() => {
  return Promise.all([
    import("../Component/Stickers/Stickers"),
    new Promise(resolve => setTimeout(resolve, 100))
  ]).then(([moduleExports]) => moduleExports);
});
const StickersMarket = lazy(() => {
  return Promise.all([
    import("../Component/Stickers/Market/StickersMarket"),
    new Promise(resolve => setTimeout(resolve, 100))
  ]).then(([moduleExports]) => moduleExports);
});
const Cart = lazy(() => {
  return Promise.all([
    import("../Component/ShoppingCart/Cart"),
    new Promise(resolve => setTimeout(resolve, 100))
  ]).then(([moduleExports]) => moduleExports);
});
const Signup = lazy(() => {
  return Promise.all([
    import("../Component/Sign/Sign"),
    new Promise(resolve => setTimeout(resolve, 100))
  ]).then(([moduleExports]) => moduleExports);
});
export const Routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/stickers",
    component: Stickers,
    exact:true,
  },
  {
    path: "/stickers/market",
    component: StickersMarket,
    exact:true
  },
  {
    path: "/shopping-cart",
    component:Cart,
  },
  {
    path: '/signup',
    component:Signup
  },
  {
    path: '/Auth',
    component:AuthenticatedComponent
  }
];
