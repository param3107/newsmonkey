import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = (props) => {
	// Map route → category name
	const categoryMap = {
		"/": "General",
		"/business": "Business",
		"/entertainment": "Entertainment",
		"/health": "Health",
		"/science": "Science",
		"/sports": "Sports",
		"/technology": "Technology",
	};

	
	const location = useLocation();
	const currentCategory = categoryMap[location.pathname] || "General";

	return (
		<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<NavLink
					className="navbar-brand"
					to="/">
					<img
						src="favicon.png"
						alt="logo"
						width="50"
						height="50"
						className="me-2"
					/>
					NewsMonkey
				</NavLink>

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink
								className={({ isActive }) =>
									"nav-link" + (isActive ? " active" : "")
								}
								to="/"
								end>
								Home
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink
								className={({ isActive }) =>
									"nav-link" + (isActive ? " active" : "")
								}
								to="/about">
								About
							</NavLink>
						</li>

						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								{currentCategory}
							</a>
							<ul className="dropdown-menu">
								{/* General on top */}
								<li>
									<NavLink
										to="/"
										end
										className={({ isActive }) =>
											"dropdown-item" +
											(isActive ? " active" : "")
										}>
										General
									</NavLink>
								</li>

								{/* Divider */}
								<li>
									<hr className="dropdown-divider" />
								</li>

								{/* Other categories */}
								{Object.entries(categoryMap)
									.filter(([path]) => path !== "/") // skip General
									.map(([path, name]) => (
										<li key={path}>
											<NavLink
												to={path}
												className={({ isActive }) =>
													"dropdown-item" +
													(isActive
														? " active"
														: "")
												}>
												{name}
											</NavLink>
										</li>
									))}
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
