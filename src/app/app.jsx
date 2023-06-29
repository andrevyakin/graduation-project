import React from "react";
import Header from "./components/ui/header";
import Footer from "./components/ui/footer";
import Main from "./layouts/main";

function App() {
    return (
        <div
            className="container d-flex gap-2 flex-column overflow-y-auto vh-100 p-2 font-roboto bg-danger-subtle"
            style={{minWidth: "320px"}}
        >
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
