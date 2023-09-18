import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Suspense } from "react";
import css from "./Layout.module.css";

const Layout = () => {
	return (
		<>
			<header className={css.header}>
				<nav className={css.navbar}>
					<div className={css.container}>
						<div className={css.navbarImg}>
							<NavLink
								className={css.link}
								to="/"
							>
								VIP Cars
							</NavLink>
						</div>
						<ul className={css.navbarItems}>
							<li className={css.navbarItem}>
								<NavLink
									className={css.link}
									to="/catalog"
								>
									<span className={css.textEffect}>Catalog</span>
								</NavLink>
							</li>
							<li className={css.navbarItem}>
								<NavLink
									className={css.link}
									to="/favourites"
								>
									<span className={css.textEffect}>Favourites</span>
								</NavLink>
							</li>
						</ul>
						<div className={css.navbarSign}>
							<p className={`${css.navbarSignin} ${css.navbarItem}`}>Sign In</p>
							<button className={`${css.navbarRegister} ${css.buttonOrange}`}>Register</button>
						</div>
					</div>
				</nav>
			</header>
			<main>
				<Suspense fallback={<div>Loading...</div>}>
					<Outlet />
				</Suspense>
			</main>
		</>
	);
};
export default Layout;
