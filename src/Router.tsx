import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";

export function Router(){
    return(
        <Routes> //rota dinamica é referenciada pelo param :nome
            <Route path="/" element={<h1>Home</h1>}></Route>
            <Route path="/event" element={<Event></Event>}></Route>
            <Route path="/event/lesson/:slug" element={<Event></Event>}></Route>
        </Routes>
    )
}