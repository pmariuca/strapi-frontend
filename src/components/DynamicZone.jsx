import React from "react";
import {COMPONENTS_TYPES} from "../utils/constants";
import ProductContent from "./ProductContent";
import ImageContent from "./ImageContent";

const renderDynamicSection=(section, idx, Component)=> {
	return (
		<div key={idx}>
			<Component data={section} key={idx}/>
		</div>
	)
}

const renderDynamicSectionsByType=(dynamic_sections)=>{
	return dynamic_sections?.map((section, idx)=>{
		switch (section?.__component){
			case COMPONENTS_TYPES.IMAGE: {
				return renderDynamicSection(section, idx, ImageContent);
			}
			case COMPONENTS_TYPES.PRODUCT: {
				return renderDynamicSection(section, idx, ProductContent);
			}
		}
	});
}

export default function DynamicZone(props) {
	const {dynamicSectionsArray}=props;

	return (
		<div>
			{renderDynamicSectionsByType(dynamicSectionsArray)}
		</div>
	);
}