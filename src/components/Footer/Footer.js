import React from "react";
import styles from "./Footer.module.scss";

//import react icon
import { FaBehance, FaDribbble, FaInstagram, FaTwitter } from "react-icons/fa";

//logo
import logo from "../../assets/images/logo.png";
import paymentLogo from "../../assets/images/paymentFooter.png";

function Footer() {
	const footerData = [
		{
			title: "Help & Information",
			data: [
				{
					title: "Pagination",
					toPath: "#",
				},
				{
					title: "Terms & Conditions",
					toPath: "#",
				},
				{
					title: "Contact",
					toPath: "#",
				},
				{
					title: "Accessories",
					toPath: "#",
				},
				{
					title: "Term of use",
					toPath: "#",
				},
			],
		},
		{
			title: "About Us",
			data: [
				{
					title: "Help Center",
					toPath: "#",
				},
				{
					title: "Address Store",
					toPath: "#",
				},
				{
					title: "Privacy Policy",
					toPath: "#",
				},
				{
					title: "Receivers & Amplifiers",
					toPath: "#",
				},
				{
					title: "Clothings",
					toPath: "#",
				},
			],
		},
		{
			title: "Categories",
			data: [
				{
					title: "Delivery",
					toPath: "#",
				},
				{
					title: "Legal Notice",
					toPath: "#",
				},
				{
					title: "Documentation",
					toPath: "#",
				},
				{
					title: "Secure payment",
					toPath: "#",
				},
				{
					title: "Stores",
					toPath: "#",
				},
			],
		},
	];
	return (
		<footer className="pt-5">
			<div className={`container pb-5`}>
				<div className="row">
					<div className={`col-lg-3 ${styles.f__col_logo}`}>
						<img src={logo} alt="logo" className="" />
						<p className="py-4 m-0 text-5xl">
							Sophisticated simplicity for the
							<br /> independent mind.
						</p>
						<div className={styles.socialIcons}>
							<a href="#">
								<FaTwitter />
							</a>
							<a href="#">
								<FaDribbble />
							</a>
							<a href="#">
								<FaBehance />
							</a>
							<a href="#">
								<FaInstagram />
							</a>
						</div>
					</div>
					{footerData.map((datas, index) => {
						return (
							<div
								className={`col-sm-4 col-lg-3 ${styles.f__col}`}
								key={index}
							>
								<h4 className="fw-bold">{datas.title}</h4>

								<div
									className={`${styles.footer__items} gap-2`}
								>
									{datas.data.map((data, index) => {
										return (
											<div key={index}>
												<a href={data.toPath}>
													{data.title}
												</a>
											</div>
										);
									})}
								</div>
							</div>
						);
					})}

					<div className="col-lg-3"></div>
					<div className="col-lg-3"></div>
				</div>
			</div>
			<div className={`${styles.copyright} py-4`}>
				<div className="container text-center d-flex flex-sm-column flex-md-row justify-content-between">
					<div>
						<p className="mb-0">
							© Created by{" "}
							<a
								href="https://www.facebook.com/phat8888.77"
								target="_blank"
							>
								Phan Phat
							</a>{" "}
							2023 |{" "}
							<a href="https://themeocean.net/" target="_blank">
								Clane
							</a>{" "}
							By{" "}
							<a href="https://themeocean.net/" target="_blank">
								ThemeOcean
							</a>
							.{" "}
							<a
								href="https://www.shopify.com/?ref=shopifycenter%22"
								target="_blank"
							>
								Powered by Shopify
							</a>
							.
						</p>
					</div>
					<div>
						<img src={paymentLogo} alt="payment" />
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
