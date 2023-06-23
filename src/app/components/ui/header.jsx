import React from "react";
import { Link } from "react-router-dom";
import { routesPaths } from "../../routes/routesPaths";
import Icon from "../common/icons/icon";

const Header = () => {
    return (
        <nav className="navbar px-2 bg-dark">
            <Link className="link-secondary" to={routesPaths.mainPage}>
                <Icon
                    id="fire"
                    color="RGBA(var(--bs-secondary-rgb)"
                    size={50}
                />
                <h3 className="d-inline-block">Всякая Всячина</h3>
            </Link>

            <Link className="link-secondary" to={routesPaths.cart}>
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
            <div>
                <form>
                    <Icon
                        id="search"
                        color="RGBA(var(--bs-secondary-rgb)"
                        size={20}
                    />
                    <input
                        type="search"
                        name="search"
                        placeholder="Поиск"
                        autoComplete="off"
                    />
                </form>
            </div>

            <Link className="link-secondary" to={routesPaths.mainPage}>
                <h3 className="d-inline-block">Гость</h3>
            </Link>
            <Link className="link-secondary" to={routesPaths.mainPage}>
                <h3 className="d-inline-block">Вход/Регистрация</h3>
            </Link>
        </nav>
    );
};

export default Header;
