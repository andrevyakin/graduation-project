import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="bg-danger">
            <nav className="navbar bg-success-subtle">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1 flex-grow-1 text-center fw-bold lead">
                        Категории
                    </span>
                </div>
            </nav>
            <nav className="nav flex-column bg-info-subtle">
                <Link className="nav-link active" aria-current="page" to="#">
                    Active
                </Link>
                <Link className="nav-link" to="#">
                    Link
                </Link>
                <Link className="nav-link" to="#">
                    Link
                </Link>
            </nav>
        </div>
    );
};

export default Sidebar;
