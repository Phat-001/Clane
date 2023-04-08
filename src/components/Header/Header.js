import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";

//react icon
import { CgSearch } from "react-icons/cg";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { SlHandbag } from "react-icons/sl";
import { BiMenuAltRight } from "react-icons/bi";
import { MdClose } from "react-icons/md";

function Header() {
	const [showMobile, setShowMobile] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	//fixed ưhen scroll down
	const [showMenu, setShowMenu] = useState(false);

	let showAnimation = "";
	showAnimation = isOpen ? styles.showAnimation : "";

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		function handleResize() {
			if (window.innerWidth < 768) {
				setShowMobile(true);
			} else {
				setShowMobile(false);
			}
		}

		if (window.innerWidth < 768) {
			handleResize();
		} else {
			setShowMobile(false);
		}

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		function handleScroll() {
			if (window.pageYOffset > 0) {
				setShowMenu(true);
			} else {
				setShowMenu(false);
			}
		}
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	var header_scrolll = showMenu ? styles.header__container : "";

	return (
		<div className={header_scrolll} style={{ position: "relative" }}>
			<header className="container py-4">
				<div className="row">
					<div className="col-4 col-md-12 col-lg-2 text-left text-md-center">
						<Link to="/">
							<img
								className="mw-100"
								src={logo}
								alt="clane-logo"
							/>
						</Link>
					</div>

					{showMobile ? (
						<div className={`${styles.mobile__only} col-8`}>
							<div className="menu">
								<div
									className={styles.menuIcon}
									onClick={toggleMenu}
								>
									{" "}
									{isOpen ? (
										<MdClose />
									) : (
										<BiMenuAltRight />
									)}{" "}
								</div>
								{isOpen && (
									<div
										className={`${styles.mobile__modal} ${showAnimation}`}
									>
										<ul
											className={`${styles.menu__social_icon}`}
										>
											<li>
												<Link to="/">
													<CgSearch />
												</Link>
											</li>
											<li>
												<Link to="/">
													<FaRegUser />
												</Link>
											</li>
											<li>
												<Link to="/">
													<FaRegHeart />
													<span
														className={
															styles.quantity
														}
													>
														3
													</span>
												</Link>
											</li>
											<li>
												<Link to="/">
													<SlHandbag />
													<span
														className={
															styles.quantity
														}
													>
														5
													</span>
												</Link>
											</li>
										</ul>
										<ul className={styles.menu__items}>
											<li>
												<Link to="/">Home</Link>
											</li>
											<li>
												<Link to="/shop">
													Shop{" "}
													<span
														className={styles.hot}
													>
														HOT
													</span>
												</Link>
											</li>
											<li>
												<Link to="/featured">
													Featured
												</Link>
											</li>
											<li>
												<Link to="/blogs">Blogs</Link>
											</li>
										</ul>
									</div>
								)}
							</div>
						</div>
					) : (
						<div className="col-lg-10">
							<div
								className={`${styles.desktop__only} row h-100`}
							>
								<div
									className={`col-lg-10 ${styles.menu__items} d-flex align-items-center justify-content-center`}
								>
									<ul className="d-flex justify-content-center mb-0">
										<li className="px-3">
											<Link to="/">Home</Link>
										</li>
										<li className="px-3">
											<Link to="/shop">
												Shop{" "}
												<span className={styles.hot}>
													HOT
												</span>
											</Link>
										</li>
										<li className="px-3">
											<Link to="/featured">Featured</Link>
										</li>
										<li className="px-3">
											<Link to="/blogs">Blogs</Link>
										</li>
									</ul>
								</div>

								<div
									className={`col-lg-2 ${styles.menu__social_icon} d-flex align-items-center`}
								>
									<ul className="d-flex justify-content-around w-100 mb-0 p-0">
										<li>
											<Link to="/">
												<CgSearch />
											</Link>
										</li>
										<li>
											<Link to="/">
												<FaRegUser />
											</Link>
										</li>
										<li>
											<Link to="/">
												<FaRegHeart />
												<span
													className={styles.quantity}
												>
													3
												</span>
											</Link>
										</li>
										<li>
											<Link to="/">
												<SlHandbag />
												<span
													className={styles.quantity}
												>
													5
												</span>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					)}
				</div>
			</header>
		</div>
	);
}

export default Header;
