import { Routes, Route } from "react-router-dom";
import { Layout, CoursesPage, CoursePage } from "./index";

export default function AppRoutes(){
    return(
        <>
            <Routes>
                {
                    <Route path="/" element={<Layout />}>
                        <Route index element={<CoursesPage />}></Route>
                        <Route path="/lesson" element={<CoursePage />}></Route>
                    </Route>
                }
            </Routes>
        </>
    );
}