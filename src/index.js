import React from "react";
import { createRoot } from "react-dom/client";
import App from './App';
import GlobalStyles from './styles/GlobalStyles';
import 'bootstrap/dist/css/bootstrap.min.css';


const nodeDom = document.getElementById("root");
const root = createRoot(nodeDom);

root.render(
    <>
    <GlobalStyles />
    <App />
    </>
)