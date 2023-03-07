import React, {useEffect, useState} from "react";
import {API_ROUTES} from '../utils/constants';
import ProductPage from "../utils/ProductPage";

const Products = (props) => {
	const [products, setProducts] = useState([]);
	const {page}=props;

	const link=API_ROUTES[page];

	useEffect(() => {
		const fetchProducts = async () => {
			const response= await fetch(link);
			const dataResponse = await response.json();
			setProducts(dataResponse);
		};
		fetchProducts();
	}, [])

	return <ProductPage products={products}/>;
};

export default Products;