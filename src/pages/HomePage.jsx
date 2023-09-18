import css from "./HomePage.module.css";
import { NavLink } from "react-router-dom";

import heroBg from "../../src/image/hero/hero-bg.png";
import heroImg from "../../src/image/hero/main-car.png";

export const Home = () => {
	return (
		<>
			<section className={css.hero}>
				<div className={css.heroContainer}>
					<img
						className={css.heroBg}
						src={heroBg}
						alt="background"
					/>

					<div className={css.heroContent}>
						<div className={css.heroText}>
							<strong>Plan your trip now</strong>
							<h1>
								Save <span>big</span> with our car rental
							</h1>
							<p>
								Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up
								options and much more.
							</p>
							<div className={css.heroButtons}>
								<NavLink
									className={css.link}
									to="/catalog"
								>
									Catalog
								</NavLink>
							</div>
						</div>
						<img
							className={css.heroImg}
							src={heroImg}
							alt="car"
						></img>
					</div>
				</div>
			</section>
		</>
	);
};
