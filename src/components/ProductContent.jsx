import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";

export default function ProductContent(section, idx){
	const {
		data: {
			Description,
			Title,
			products,
		}={}
	}=section || {};

	const renderProductImages = (productImages) => {
		const {
			data,
		} = productImages;
		const {
			attributes: {
				alternativeText: alt,
				url,
			}
		}=data[0]

		return <img
			src={process.env.REACT_APP_API_URL+url}
			alt={alt}
			className="w-2/4 object-cover object-center"
		/>
	};

	return (
		<>
			<Swiper
				navigation={true}
				modules={[Navigation]}
				className="mySwiper"
				slidesPerView={2.5}
			>
				{products?.data?.map((product, idx)=>{
					const {
						attributes: {
							category,
							description,
							name,
							price,
							photos,
						},
						id,
					} = product;

				return (
					<SwiperSlide key={idx}>
					<div className="gap-y-4">
						<div
							key={id}
							className="group relative flex flex-row overflow-hidden border border-gray-200 bg-white"
						>
							{renderProductImages(photos)}
							<div className="flex flex-1 flex-col space-y-2 p-4">
								<h3 className="text-sm font-medium text-gray-900">
									<a href={product.href}>
										<span aria-hidden="true" className="absolute inset-0"/>
										{name}
									</a>
								</h3>
								<p className="text-sm text-gray-500">{description}</p>
								<div className="flex flex-1 flex-col justify-end">
									<p className="text-sm italic text-gray-500">{category}</p>
									<p className="text-base font-medium text-gray-900">{price}</p>
								</div>
							</div>
						</div>
					</div>
					</SwiperSlide>
				)
				})}
			</Swiper>
		</>
	)
};