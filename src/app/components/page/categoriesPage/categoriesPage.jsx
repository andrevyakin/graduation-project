import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCategories} from "../../../store/categoriesSlice";
import CategoriesList from "../../ui/categoriesList";

const CategoriesPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);
    const {list, isLoading} = useSelector(({categories}) => categories);

    return <CategoriesList list={list} isLoading={isLoading} />;
};

export default CategoriesPage;
