import React, {useState} from "react";
import {Link} from "react-router-dom";
import {routesPaths} from "../../constants/routesPaths";
import Icon from "../common/icons/icon";

const Header = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    return (
        <nav className="navbar navbar-expand-lg row-cols-4 text-center bg-dark">
            <Link
                className="navbar-brand col link-secondary"
                to={routesPaths.mainPage}
            >
                <Icon
                    id="fire"
                    color="RGBA(var(--bs-secondary-rgb)"
                    size={50}
                />
                <h3 className="d-inline-block">Всякая Всячина</h3>
            </Link>
            <button
                className="navbar-toggler bg-secondary me-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded={isNavCollapsed}
                aria-label="Toggle navigation"
                onClick={() => setIsNavCollapsed(!isNavCollapsed)}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div
                className={`${
                    isNavCollapsed ? "collapse" : "d-grid gap-3"
                } navbar-collapse`}
                id="navbarNavAltMarkup"
            >
                <Link className="link-secondary col" to={routesPaths.cart}>
                    <Icon
                        id="basket-fill"
                        addClassName="position-relative"
                        color="RGBA(var(--bs-secondary-rgb)"
                        size={50}
                    />
                    <span className="position-absolute top-50 start-60 translate-middle badge rounded-pill bg-success fs-6">
                        2
                    </span>
                    <h3 className="d-inline-block ms-3">Корзина</h3>
                </Link>
                <form className="col">
                    <Icon
                        id="search"
                        color="RGBA(var(--bs-secondary-rgb)"
                        size={20}
                    />
                    <input
                        type="search"
                        name="search"
                        placeholder="Поиск (по названию)"
                        autoComplete="off"
                    />
                </form>
                <Link className="link-secondary col" to={routesPaths.mainPage}>
                    <h3 className="d-inline-block">Вход/Регистрация</h3>
                </Link>
            </div>
        </nav>
    );
};

export default Header;
