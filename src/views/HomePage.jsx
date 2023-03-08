import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import DynamicZone from "../components/DynamicZone";
import {API_ROUTES} from "../utils/constants";

export default function HomePage() {
	const [homepage, setHomepage]=useState([]);

	useEffect(()=>{
		const fetchZones=async()=>{
			const response=await fetch(API_ROUTES.HOMEPAGE);
			const dataResponse=await response.json();
			setHomepage(dataResponse);
		};
		fetchZones();
	}, [])

	const {data: {attributes: {HomepageZone} = {} } = {} } = homepage  || {};

	return (
		<>
			<div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8">
				<Header/>
				<div> <DynamicZone dynamicSectionsArray={HomepageZone}/> </div>
			</div>
		</>
	);
}