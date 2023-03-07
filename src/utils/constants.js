export const API_ROUTES = {
	PRODUCTS_LIST: process.env.REACT_APP_API_URL+"/api/products?populate=*",
	TSHIRT_LIST: process.env.REACT_APP_API_URL+"/api/products?populate=*&filters[category][$eq]%3D=Tricou",
	HOODIE_LIST: process.env.REACT_APP_API_URL+"/api/products?populate=*&filters[category][$eq]%3D=Hanorac",
	BLOUSE_LIST: process.env.REACT_APP_API_URL+"/api/products?populate=*&filters[category][$eq]%3D=Bluza",
	JEANS_LIST: process.env.REACT_APP_API_URL+"/api/products?populate=*&filters[category][$eq]%3D=Blugi",
	TROUSERS_LIST: process.env.REACT_APP_API_URL+"/api/products?populate=*&filters[category][$eq]%3D=Pantaloni",
	SHIRT_LIST: process.env.REACT_APP_API_URL+"/api/products?populate=*&filters[category][$eq]%3D=Camasa",
};