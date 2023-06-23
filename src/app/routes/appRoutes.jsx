import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../components/ui/mainPage";

const AppRoutes = () => {
    return (
        <Routes>
            {/* Index Route - Дочерний маршрут без пути, который отображается в родительском */}
            <Route index element={<MainPage />} />
        </Routes>
    );
};

export default AppRoutes;
