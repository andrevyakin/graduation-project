import React from "react";
import AppRoutes from "./routes/appRoutes";
import Header from "./components/ui/header";
import Sidebar from "./components/ui/sidebar";
import Footer from "./components/ui/footer";

function App() {
    return (
        <div className="container-fluid d-flex gap-2 flex-column vh-100 p-2 font-roboto">
            <Header />
            <main className="d-flex flex-grow-1 justify-content-center">
                <div className="row gap-2 flex-nowrap w-100 p-0">
                    <aside className="col-3 p-2 bg-info">
                        <Sidebar />
                    </aside>
                    <section className="col-9 p-2 flex-shrink-1 bg-success">
                        <AppRoutes />
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
