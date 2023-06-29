import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
// import product from "../../layouts/product";

const ProductsList = ({list, isLoading, categoryId}) => {
    const filteredList = categoryId
        ? list.filter(
              (product) => Number(product.category.id) === Number(categoryId)
          )
        : list;
    return (
        <div className="row">
            {isLoading ? (
                <>
                    {filteredList.map(({id, title, img, price, category}) => (
                        <div
                            key={id}
                            className="card mb-3 col-lg-4 col-md-6 col-sm-6 col-xs-12"
                            style={{maxWidth: "540px"}}
                        >
                            <div className="row g-0">
                                <div className="col-md-4 d-flex align-items-center">
                                    <img
                                        src={`/images/products/${category.title}/${img}`}
                                        className="img-fluid rounded-start"
                                        alt="Фото товара"
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{title}</h5>
                                        <p className="card-text">{`Id товара: ${id}`}</p>
                                        <p className="card-text">
                                            {`Цена: ${price} руб.`}
                                        </p>
                                        <p className="card-text text-end">
                                            <Link
                                                className="btn btn-outline-success btn-sm"
                                                role="button"
                                                to={`/product/${id}`}
                                            >
                                                <small className="text-body-secondary">
                                                    Открыть карточку
                                                </small>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            ) : (
                <h1>Загрузка...</h1>
            )}
        </div>
    );
};

ProductsList.propTypes = {
    list: PropTypes.array,
    isLoading: PropTypes.bool,
    categoryId: PropTypes.string
};

export default ProductsList;
