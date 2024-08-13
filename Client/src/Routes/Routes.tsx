import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../Layout/App";

export const routers: RouteObject[] = [
    {
        path: "/",
        element: <App />
    },
]

export const router = createBrowserRouter(routers);