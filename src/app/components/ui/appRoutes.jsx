import React from "react";
import {Route, Routes} from "react-router-dom";
import {routesPaths} from "../../constants/routesPaths";
import ProductsPage from "../page/productsPage";
import Product from "../../layouts/product";

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<ProductsPage />} />
            <Route path={routesPaths.category} element={<ProductsPage />} />
            <Route path={routesPaths.product} element={<Product />} />
        </Routes>
    );
};

export default AppRoutes;
