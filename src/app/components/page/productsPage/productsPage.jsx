import React, {useEffect, useState} from "react";
import ProductsList from "../../ui/productsList";
import {useDispatch, useSelector} from "react-redux";
import {filterByCondition, getProducts} from "../../../store/productsSlice";
import {useParams} from "react-router-dom";

const ProductsPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);
    const {list, isLoading, filtered} = useSelector(({products}) => products);
    const [values, setValues] = useState({
        sortByPriceOrName: 0,
        numberElements: 15
    });
    useEffect(() => {
        if (!list.length) return;

        dispatch(filterByCondition(values.sortByPriceOrName));
    }, [dispatch, list.length, values.sortByPriceOrName]);

    const {id} = useParams() || undefined;

    const handleChange = ({target}) => {
        const {value, name} = target;
        setValues((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <>
            <div className="row g-2">
                <div className="col-md my-auto">
                    <div className="form-floating">
                        <select
                            className="form-select form-select-sm"
                            id="sortByPriceOrName"
                            name="sortByPriceOrName"
                            value={values.sortByPriceOrName}
                            onChange={handleChange}
                        >
                            <option defaultValue={0}>Сортировать по:</option>
                            <option value="sortOrderAsc">
                                Цене (по возрастанию)
                            </option>
                            <option value="sortOrderDes">
                                Цене (по убыванию)
                            </option>
                            <option value="sortAbcAsr">Алфавиту (А-Я)</option>
                            <option value="sortAbcDes">Алфавиту (Я-А)</option>
                        </select>
                        <label htmlFor="sortByPriceOrName">Сортировка</label>
                    </div>
                </div>
                <div className="col-md my-auto">
                    <div className="form-floating">
                        <select
                            className="form-select form-select-sm"
                            id="numberElements"
                            name="numberElements"
                            value={values.numberElements}
                            onChange={handleChange}
                        >
                            <option defaultValue={0}>Показывать товаров</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                        </select>
                        <label htmlFor="numberElements">
                            Количество товаров на странице:
                        </label>
                    </div>
                </div>
            </div>
            <ProductsList list={list} isLoading={isLoading} categoryId={id} />
        </>
    );
};

export default ProductsPage;
