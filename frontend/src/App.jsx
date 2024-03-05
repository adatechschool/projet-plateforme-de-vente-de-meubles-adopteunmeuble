import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/header.jsx";

function App() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default App;
