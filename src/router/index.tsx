import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider  } from "react-router-dom";
import App from "../App";
import { Home, SinglePage, Categories, Cart, Likes, Login } from "@pages";


export default function Router(){
    const root = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App/>}>
                <Route index element={<Home/>}/>
                <Route path="/page/:id" element={<SinglePage />} />
                <Route path="/page" element={<SinglePage />} />
                <Route path="/category" element={<Categories/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/like" element={<Likes/>} />
                <Route path="/login" element={<Login/>} />
            </Route>
        )
    )

    return <RouterProvider router={root} />
}