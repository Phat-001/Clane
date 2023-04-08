import React from "react";

//components
import {
	Banner,
	Policy,
	Introduce,
	Discount,
	Arrivals,
	BlogsSlider,
	Just4U,
} from "../../components";

//images
import bn1_1 from "../../assets/images/bn1_1.png";
import bn1_2 from "../../assets/images/bn1_2.png";
import bn1_3 from "../../assets/images/bn1_3.png";

//ARRIVALS products images
import product1 from "../../assets/images/products/product1.png";
import product2 from "../../assets/images/products/product2.png";
import product3 from "../../assets/images/products/product3.png";
import product4 from "../../assets/images/products/product4.png";
import product5 from "../../assets/images/products/product5.png";
import product6 from "../../assets/images/products/product6.png";
import product7 from "../../assets/images/products/product7.png";
import product8 from "../../assets/images/products/product8.png";

//Best seller products images
import seller1 from "../../assets/images/products/seller1.png";
import seller2 from "../../assets/images/products/seller2.png";
import seller3 from "../../assets/images/products/product3.png";
import seller4 from "../../assets/images/products/seller4.png";
import seller5 from "../../assets/images/products/seller5.png";

//Our blogs images
import blog1 from "../../assets/images/blogs/blog1.png";
import blog2 from "../../assets/images/blogs/blog2.png";
import blog3 from "../../assets/images/blogs/blog3.png";

//Just for you images 
import just4u from "../../assets/images/just4u.png";


const bannersContent = [
	{
		title: "Dark Chocolate",
		status: "New Collection",
		destination: "Style Destination",
		image: bn1_1,
		btn: {
			primary: true,
			text: "shop now",
			path: "/shop",
		},
		contentLeft: true,
		contentWhite: true,
	},
	{
		title: "Fruit Chocolate",
		status: "Best Seller",
		destination: "Style Destination",
		image: bn1_3,
		btn: {
			primary: false,
			text: "shop now",
			path: "/shop",
		},
		contentLeft: false,
		contentWhite: false,
	},
	{
		title: "Chocolate Cake",
		status: "New Collection",
		destination: "Style Destination",
		image: bn1_2,
		btn: {
			primary: true,
			text: "shop now",
			path: "/shop",
		},
		contentLeft: true,
		contentWhite: true,
	},
];

const arrivalsContent = [
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
];

const bestSellerContent = [
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

const ourBlogsContent = [
	{
		title: "Dishes made from chocolate",
		description:
			"Chocolate is a food made from the fruit of the cocoa tree. Chocolate is the basic ingredient in many kinds of candy,...",
		image: blog1,
		path: "#",
	},
	{
		title: "Your favorite flavor",
		description:
			"Chocolate is a food made from the fruit of the cocoa tree. Chocolate is the basic ingredient in many kinds of candy,...",
		image: blog2,
		path: "#",
	},
	{
		title: "Chocolate origin",
		description:
			"Chocolate is a food made from the fruit of the cocoa tree. Chocolate is the basic ingredient in many kinds of candy,...",
		image: blog3,
		path: "#",
	},
];

const just4uContent = {
	title: "just for you",
	description: "Chocolate is made from the seeds of the cocoa tree that are dried and crushed. The origin of the cacao tree is from Mexico, the cocoa beans have a slightly bitter taste",
	image: just4u,
	btn: {
		primary: false,
		text: "shop now",
		path: "/shop",
	},
	product1: {
		productName: "Dark Caramel",
		image: seller1,
		isExpired: true,
		isSale: true,
		price: {
			normal: "$16.00",
			sale: "$11.00",
		},
	},
	product2: {
		productName: "Strawberry chocolate",
		image: product3,
		isExpired: false,
		isSale: true,
		price: {
			normal: "$23.00",
			sale: "$20.00",
		},
	},
};

function Home() {
	return (
		<div>
			<Banner contents={bannersContent} />
			<Policy />
			<Just4U propsJust={just4uContent}/>
			<Arrivals propsProducts={bestSellerContent} title="BEST SELLER" />
			<Introduce />
			<Arrivals propsProducts={arrivalsContent} title="NEW ARRIVALS" />
			<Discount />
			<BlogsSlider propsBlogs={ourBlogsContent} title="OUR BLOGS" />
		</div>
	);
}

export default Home;
