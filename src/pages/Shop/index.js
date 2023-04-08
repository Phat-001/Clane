import React from "react";
import {Product} from "../../components";

import product1 from "../../assets/images/products/product1.png";
import product2 from "../../assets/images/products/product2.png";
import product3 from "../../assets/images/products/product3.png";
import product4 from "../../assets/images/products/product4.png";
import product5 from "../../assets/images/products/product5.png";
import product6 from "../../assets/images/products/product6.png";
import product7 from "../../assets/images/products/product7.png";
import product8 from "../../assets/images/products/product8.png";

import seller1 from "../../assets/images/products/seller1.png";
import seller2 from "../../assets/images/products/seller2.png";
import seller3 from "../../assets/images/products/product3.png";
import seller4 from "../../assets/images/products/seller4.png";
import seller5 from "../../assets/images/products/seller5.png";

const products = [
	{
		productName: "Peanut butter chocolate",
		image: product1,
		isExpired: true,
		isSale: true,
		price: {
			normal: "$13.00",
			sale: "$10.00",
		},
	},
	{
		productName: "Strawberry Chocolate Ice Cream",
		image: product2,
		isExpired: false,
		isSale: false,
		price: {
			normal: "$17.00",
			sale: "0",
		},
	},
	{
		productName: "Strawberry chocolate",
		image: product3,
		isExpired: false,
		isSale: true,
		price: {
			normal: "$23.00",
			sale: "$20.00",
		},
	},
	{
		productName: "Hard chocolate",
		image: product4,
		isExpired: false,
		isSale: true,
		price: {
			normal: "$25.00",
			sale: "$20.00",
		},
	},
	{
		productName: "white chocolate",
		image: product5,
		isExpired: false,
		isSale: false,
		price: {
			normal: "$20.00",
			sale: "0",
		},
	},
	{
		productName: "Milk Chocolate Raisins",
		image: product6,
		isExpired: false,
		isSale: false,
		price: {
			normal: "$15.00",
			sale: "0",
		},
	},
	{
		productName: "Round chocolate",
		image: product7,
		isExpired: false,
		isSale: false,
		price: {
			normal: "$19.00",
			sale: "0",
		},
	},
	{
		productName: "Milk chocolate",
		image: product8,
		isExpired: true,
		isSale: false,
		price: {
			normal: "$25.00",
			sale: "$23.00",
		},
	},
	{
		productName: "Dark Caramel",
		image: seller1,
		isExpired: true,
		isSale: true,
		price: {
			normal: "$16.00",
			sale: "$11.00",
		},
	},
	{
		productName: "Choco Nuts",
		image: seller2,
		isExpired: false,
		isSale: true,
		price: {
			normal: "$25.00",
			sale: "$19.00",
		},
	},
	{
		productName: "Choco orange",
		image: seller3,
		isExpired: false,
		isSale: true,
		price: {
			normal: "$25.00",
			sale: "$23.00",
		},
	},
	{
		productName: "Dark Almonds",
		image: seller4,
		isExpired: false,
		isSale: false,
		price: {
			normal: "$25.00",
			sale: "00",
		},
	},
	{
		productName: "Brown chocolate",
		image: seller5,
		isExpired: false,
		isSale: true,
		price: {
			normal: "$20.00",
			sale: "$16.00",
		},
	},
];
	


function Shop() {
	
	return (
		<div className="container">
			<h1 className="text-center">Shop</h1>
			<div className="row">
				{products.map((product,index)=>{
					return <div className="col-6 col-md-4 col-lg-3">
						<Product key={index} props={product}/>
					</div>
				})}
				

			</div>
		</div>
	);
}

export default Shop;
