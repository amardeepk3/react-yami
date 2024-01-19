import React from "react";
import ReactDOM from "react-dom/client";

/*
 header
 - logo
 - nav bar
 body
 - 
 footer
*/
// const header = React.createElement("h1", {id:"heading"}, "hello world from react");
const jsxHeading = (
    <h1 id="heading">hello world</h1>)
    ;

const Header = (props) => {
    return (
        <div className="header">
            <h1>{props.title}</h1>
        </div>
    )
}

const Body = () =>{
    return (
        <div>
        </div>
    );
}

const Layout = ()=>{
    return (<div>
<Header title="header"/>

<Body/>
    </div>);
}

const HeadComponent = () => (<h1 id="heading">hello world</h1>);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< Layout />);