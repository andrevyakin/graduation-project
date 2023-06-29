import React from "react";
import CategoriesPage from "../components/page/categoriesPage";
import AppRoutes from "../components/ui/appRoutes";

const Main = () => {
    return (
        <main className="d-flex flex-grow-1 justify-content-center">
            <div className="row gap-2 flex-nowrap w-100 p-0">
                <aside className="col-3 p-2 bg-light d-none d-sm-block">
                    <CategoriesPage />
                </aside>
                <section className="col-9 p-2 flex-shrink-1 bg-primary-subtle">
                    <AppRoutes />
                </section>
            </div>
        </main>
    );
};

export default Main;
