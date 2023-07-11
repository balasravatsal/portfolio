import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Experience from "./Pages/Experience.jsx";
import Contact from "./Pages/Contact.jsx";
import Project from "./Pages/Project.jsx";
import SharedLayout from "./Components/Navbar/SharedLayout.jsx";

function App() {

    return (
        <>
            <BrowserRouter>

                <Routes>
                    <Route path={"/"} element={ <SharedLayout/> }>
                        <Route index element={ <Home/> } />
                        <Route path={"/about"} element={ <About/> } />
                        <Route path={"/experience"} element={ <Experience/> } />
                        <Route path={"/projects"} element={ <Project/> } />
                        <Route path={"/contact"} element={ <Contact/> } />
                        <Route path={"*"} element={ <Home/> } />
                    </Route>
                </Routes>

            </BrowserRouter>

        </>
    )
}

export default App
