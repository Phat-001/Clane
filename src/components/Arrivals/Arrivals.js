import React from "react";
import styles from "./Arrivals.module.scss";

//components
import { Product } from "../../components";

// slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Arrivals({ propsProducts, title }) {
	const settings = {
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 5000,
		slidesToShow: 4,
		slidesToScroll: 3,
		responsive:[
			{
			  breakpoint: 1024,
			  settings: {
			    slidesToShow: 3,
			    slidesToScroll: 3,
			    infinite: true,
			    dots: true
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
			    slidesToShow: 2,
			    slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
			    slidesToShow: 2,
			    slidesToScroll: 1
			  }
			}
		   ]
	};
	return (
		<div className={`${styles.arrivals} custom__slider_arrivals container`}>
			<div className="text-center mb-4">
				<h2>{title}</h2>
			</div>
			<Slider {...settings}>
				{propsProducts.map((item, idx) => {
					return <Product key={idx} props={item} />;
				})}
			</Slider>
		</div>
	);
}

export default Arrivals;
