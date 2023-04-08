import React from "react";
import styles from "./Banner.module.scss";

//components
import { Button } from "../../components";

// slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Banner({ contents, children }) {
	const settings = {
		dots: false,
		arrows: false,
		infinite: true,
		speed: 500,
		autoplay: true,
		fade: true,
		autoplaySpeed: 5000,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<div className="test">
			<Slider {...settings} adaptiveHeight={true}>
				{contents.map((content, idx) => {
					const classContentPosition = content.contentLeft
						? styles.banner__content_L
						: styles.banner__content_R;

					const classContentColor = content.contentWhite
						? styles.content__white
						: styles.content__black;
					return (
						<div key={idx} className={styles.banner}>
							<img
								src={content.image}
								alt={content.title + " image"}
							/>
							<div
								className={`${classContentPosition} ${classContentColor}`}
							>
								<p>New Collection</p>
								<h3>{content.title}</h3>
								<p>Style Destination</p>
								<Button props={content.btn} />
							</div>
						</div>
					);
				})}
			</Slider>
               
		</div>
	);
}

export default Banner;
