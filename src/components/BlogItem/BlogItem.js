import React from "react";
import styles from "./BlogItem.module.scss";

function BlogItem({ props }) {
	if (!props) {
		return;
	}
	return (
		<div className={styles.blog__item}>
			<a href="#">
				<img src={props.image} alt={props.title} />
			</a>
			<h4>NEWS</h4>
			<a href={props.path}>
				<h3>{props.title}</h3>
			</a>
			<p>{props.description}</p>
		</div>
	);
}

export default BlogItem;
