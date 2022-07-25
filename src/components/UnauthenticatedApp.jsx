import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "../pages/About";
import Pricing from "../pages/pricing";
import ModalLogin from "./modal";

export default function UnauthenticatedApp({login}){
    return(

        <div>
            <h1>Welcome</h1>
            <p>Please login</p>
            <button onClick={login}>Login</button>
            <ModalLogin/>
            <main>
                <h2>Learn more about the app</h2>
                <Router>
                <ul>
                    <li>
                        <Link to="Pricing">Pricing</Link>
                    </li>
                    <li>
                        <Link to="/">About Us</Link>
                    </li>
                </ul>
                <Routes>
                <Route exact path="/" element={<About />} />
                <Route path="/pricing" element={<Pricing />} />
                </Routes>
                </Router>
            </main>
        </div>

    )

}
