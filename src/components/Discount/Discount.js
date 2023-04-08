import React from "react";
import styles from "./Discount.module.scss";

import { FaPaperPlane } from "react-icons/fa";

function Discount() {
	return (
		<div className={styles.discount}>
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-6 text-center">
						<h2>GET UPDATE</h2>
						<p>
							Subscribe our newsletter and get <br />
							discount 30% off
						</p>
					</div>
					<div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
						<div className={styles.input__wrapper}>
							<input
								type="email"
								placeholder="Your email address"
								required="required"
								className="w-100"
							/>
							<button type="submit">
								<FaPaperPlane />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Discount;
