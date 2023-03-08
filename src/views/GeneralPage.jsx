import React from "react";
import Products from "../components/Products";
import Header from "../components/Header";

const GeneralPage = (props) => {
	const {page}=props;
	return (
		<>
			<Header/>
			<Products page={page}/>
		</>
			)
};

export default GeneralPage;