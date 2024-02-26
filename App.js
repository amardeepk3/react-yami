import React from "react";
import ReactDOM from "react-dom/client";
import 'semantic-ui-css/semantic.min.css'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


import HomepageLayout from "./src/components/HomepageLayout"
import LoginForm from "./LoginForm";
import Footer from "./src/components/Footer"

/*
 header
 - logo
 - nav bar
 body
 - 
 footer
*/
// const header = React.createElement("h1", {id:"heading"}, "hello world from react");
// const jsxHeading = (
//     <h1 id="heading">hello world</h1>)
//     ;

// const Header = (props) => {
//     return (
//         <div className="header">
//             <h1>{props.title}</h1>
//         </div>
//     )
// }

// const Body = () =>{
//     return (
//         <div>
//         </div>
//     );
// }

// const Layout = ()=>{
//     return (<div>
// <Header title="header"/>

// <Body/>
//     </div>);
// }

// const HeadComponent = () => (<h1 id="heading">hello world</h1>);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(< HomepageLayout />);
// const AppLayout = () => {

//     return (
    
//     <><HomepageLayout /><Outlet /> <Footer /> </>
//     );
//   };
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <HomepageLayout />,
      errorElement: <Error />,
      children: [

      ],
    },
    {
      path: "/login",
      element: <LoginForm />,
    }
  ]);
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(<RouterProvider router={appRouter} />);
  