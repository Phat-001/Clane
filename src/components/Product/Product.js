import React, {useState} from "react";
import styles from "./Product.module.scss";

import { SlHandbag } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { CgSearch } from "react-icons/cg";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";


function Product({ props }) {

	
	if (!props) {
		return;
	}

	var isSaleClass = props.isSale ? styles.sale : styles.notSale;
	var isExpiredClass = props.isExpired ? styles.expired : '';

	return (
		<div className={`${styles.product__item} ${isSaleClass}`}>
			<a href="#">
				<div className={`${styles.image_box}  ${isExpiredClass}`} >
					<img src={props.image} alt={props.productName} />
					
				</div>
				<div>
					<h5>
						{props.productName}
					</h5>
					<p className={isSaleClass}>
						<span>{props.price.sale}</span>{" "}
						<span>{props.price.normal}</span>{" "}
					</p>
				</div>
			</a>
			<div className={styles.product__icon_action}>
			<Tippy content="Add to Wishlist">
			<a href="#"><FaRegHeart/></a>
			</Tippy>
			<Tippy content="Add to Cart">
			<a href="#"><SlHandbag/></a>
			</Tippy>
			<Tippy content="Quick View">
			<a href="#"><CgSearch/></a>
			</Tippy>
				
				
				
			</div>
		</div>
	);
}

export default Product;
