import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";

// React.createElement => object => HTMLElement(render)
// const parent = React.createElement("div", { id: "parent" }, "hello world");
// console.log(parent);

// JSX (transpiled before it reached to JS Engine)

// JSX =>Babel transpiles it to React.createElement -JS Object  =>HTMLElement

/*
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 *  - RestaruntCard
 * Footer
 * - Copyright
 * - Link
 * - Address
 * - Contact
 */

// const heading = React.createElement(
//   "h1",
//   { id: "header" },
//   "hello world from react!"
// );

// const spanEle = <span>span Elemenet</span>

// const title = (
//   <h1 id="headingJSX" className="heading">
//     {spanEle} <br/>
//     Namste React for Title
//   </h1>
// );

// const HeadingComponent = () => (
//   <div>
//     {title}
//     <h1 id="headingJSX" className="heading">
//       Namste React
//     </h1>
//   </div>
// );
// const FooterComponent = () => (
//     <div>
//     <h4 id="footerJSX" className="heading">
//       Footer Component React
//     </h4>
//   </div>
// )

// component composition =>
// const PageComponent = () => (
//   <div>
//     <HeadingComponent />
//     <FooterComponent />
//   </div>
// );

//
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
