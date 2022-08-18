import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home"
import Tasks from "../pages/Tasks"

//Create the routes

function RouteProject() {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={< Home />}/>
                <Route path="/task/:userid" element={< Tasks/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteProject