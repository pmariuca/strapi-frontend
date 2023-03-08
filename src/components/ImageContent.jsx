import React from "react";
import {ALIGNMENT} from "../utils/constants";

export default function ImageContent(section, idx){
	const {
		data: {
			Display,
			Title,
			Tag,
			Description,
			Image: {
				data: {
					attributes: {
						url,
						alternativeText:alt,
					}= {}
				}= {}
			}= {}
		}= {}
	}=section || {};

	const element=document.getElementById("img-content");

	function addClass(){
		switch (Display){
			case ALIGNMENT.LEFT: {
				return "flex flex-row py-7 container mx-auto";
			}
			case ALIGNMENT.RIGHT: {
				return "flex flex-row-reverse py-7 container mx-auto";
			}
			case ALIGNMENT.CENTER: {
				return "object-center py-7 mx-auto";
			}
		}
	};

	return (
		<div id="img-content" className={addClass()} >
			<div id={"image"} className="flex justify-center">
				<img
					src={process.env.REACT_APP_API_URL+url}
					alt={alt}
				className=""/>
			</div>
			<div id="text" className="w-full px-5 container mx-auto">
				<h1 className="text-4xl text-center">{Title}</h1>
				<h2 className="text-xl text-center pt-1">{Tag}</h2>
				<h3 className="pt-3 text-center">{Description}</h3>
			</div>
		</div>
	);
};