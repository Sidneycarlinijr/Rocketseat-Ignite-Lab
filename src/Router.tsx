import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";
import { Subscribe } from "./pages/Subscribe";

export function Router(){
    return(
        <Routes> //rota dinamica é referenciada pelo param :nome
            <Route path="/" element={<Subscribe></Subscribe>}></Route>
            <Route path="/event" element={<Event></Event>}></Route>
            <Route path="/event/lesson/:slug" element={<Event></Event>}></Route>
        </Routes>
    )
}