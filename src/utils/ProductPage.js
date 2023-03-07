import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import React from "react";

const ProductPage = (props) => {
	const {products}=props;

	const renderProductImages = (productImages) => {
		const {
			data,
		} = productImages;
		return data?.map((image, idx) => {
			const {
				attributes: {
					alternativeText: alt,
					url,
				}
			}= image;
			return <SwiperSlide key={idx}>
				<img
					src={process.env.REACT_APP_API_URL+url}
					alt={alt}
					className="h-full w-full object-cover object-center sm:h-full sm:w-full"
				/>
			</SwiperSlide>;
		})
	};

	return (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8">
				<h2 className="text-3xl font-normal leading-normal mt-0 mb-2">Products</h2>

				<div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
					{products?.data?.map((product) => {
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
							<div
								key={id}
								className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
							>
								<div>
									<Swiper
										modules={[Autoplay]}
										className={"aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96"}
										slidesPerView={1}
										autoplay={{ delay: 5000,}}
									>
										{renderProductImages(photos)}
									</Swiper>
								</div>
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
						)})}
				</div>
			</div>
		</div>
	)
};

export default ProductPage;