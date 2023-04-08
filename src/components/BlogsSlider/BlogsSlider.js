import React from 'react';
import styles from './BlogsSlider.module.scss';

// slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BlogItem } from '../../components';

function BlogsSlider( {propsBlogs, title} ) {
     const settings = {
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 5000,
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
			    slidesToShow: 2,
			    slidesToScroll: 1
			  }
			}
		   ]
	};
  return (
   
          <div className={`${styles.blogs} custom__slider_blogs container`}>
			<div className="text-center mb-4">
				<h2>{title}</h2>
			</div>
			<Slider {...settings}>
				{propsBlogs.map((item, idx) => {
					return <BlogItem key={idx} props={item} />;
				})}
			</Slider>
		</div>
    
  )
}

export default BlogsSlider