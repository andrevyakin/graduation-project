import React from "react";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";

const CategoriesList = ({list, isLoading}) => {
    return {isLoading} ? (
        <>
            <h1 className="text-center fw-bold lead">Категории</h1>
            <nav className="nav flex-column">
                {list.map(({id, name}) => (
                    <NavLink
                        key={id}
                        className={({isActive}) =>
                            `nav-link fw-bold bg-success-subtle h2 p-3 border border-primary-subtle rounded-3 ${
                                isActive ? "text-dark-emphasis" : ""
                            }`
                        }
                        to={`/category/${id}`}
                    >
                        {name}
                    </NavLink>
                ))}
            </nav>
        </>
    ) : (
        <h1>Загрузка...</h1>
    );
};

CategoriesList.propTypes = {
    list: PropTypes.array,
    isLoading: PropTypes.bool
};

export default CategoriesList;
