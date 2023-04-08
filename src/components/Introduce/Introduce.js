import React from "react";
import styles from "./Introduce.module.scss";

//type animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../../utils/variants";

import { Button } from "../../components";

//image
import introImage from "../../assets/images/intro1.png";

function Introduce() {
	const btn = {
		primary: false,
		text: "read more",
		path: "/shop",
	};
	return (
		<div className={styles.introduce}>
			<div>
      <div className={styles.content}>
				<motion.h1 variants={fadeIn("up", 0.3)}
              initial="hidden"
              viewport={{ once: false, amount: 0.7 }}
              whileInView={"show"}>
					100%{" "}
					{
						<TypeAnimation
							sequence={[
								"Natural Ingredients",
								2000,
								"No Chemicals",
								2000,
							]}
							speed={150}
							className="text-red ml-2"
							wrapper="span"
							repeat={Infinity}
						/>
					}
				</motion.h1>
				<motion.p variants={fadeIn("up", 0.4)}
              initial="hidden"
              viewport={{ once: false, amount: 0.7 }}
              whileInView={"show"}>
					Chocolate is made from the seeds of the cocoa tree that are
					dried and crushed. The origin of the cacao tree is from
					Mexico, the cocoa beans have a slightly bitter taste.
					Chocolate is a mixture of cocoa powder and cocoa butter, to
					which sugar, milk, and other substances are added, and
					finally packed into bars. Chocolate can also be made into a
					drink (called cocoa or hot chocolate).
				</motion.p>
				<motion.div variants={fadeIn("up", 0.5)}
              initial="hidden"
              viewport={{ once: false, amount: 0.7 }}
              whileInView={"show"} className={styles.readbtn}>
					<Button props={btn} />
				</motion.div>
			</div>
      </div>
			<motion.div variants={fadeIn("down", 0.3)}
            initial="hidden"
            viewport={{ once: false, amount: 0.7 }}
            whileInView={"show"}>
				<img src={introImage} alt='introduce' />
			</motion.div>
		</div>
	);
}

export default Introduce;
