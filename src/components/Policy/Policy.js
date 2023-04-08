import React from "react";

// slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./Policy.module.scss";

import freeShipping from "../../assets/images/shipped.png";
import box from "../../assets/images/box.png";
import shield from "../../assets/images/shield.png";

function Policy() {

  const settings = {
		dots: false,
		arrows: false,
		infinite: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 3,
		slidesToScroll: 1,
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
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
	};

	return (
		<div className={`${styles.policy__section} container`}>
      <div className={styles.box__shadow}>
      <Slider {...settings} adaptiveHeight={true}>
			<div>
      <div className={styles.policy__item}>
				<div className={styles.policy__image}>
					<img src={freeShipping} alt="free shipping" />
				</div>
				<h3>free shipping</h3>
				<p>For all order over $99</p>
			</div>
      </div>

			<div>
      <div className={styles.policy__item}>
				<div className={styles.policy__image}>
					<img src={box} alt="free shipping" />
				</div>
				<h3>delivery on time</h3>
				<p>Definition and measurement</p>
			</div>
      </div>

			<div>
      <div className={styles.policy__item}>
				<div className={styles.policy__image}>
					<img src={shield} alt="free shipping" />
				</div>
				<h3>secure payment</h3>
				<p>100% secure payment</p>
			</div>
      </div>
      </Slider>
      </div>
		</div>
	);
}

export default Policy;
