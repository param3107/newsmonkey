import React, { Component } from "react";
import { NavLink, useLocation } from "react-router-dom";

class Navbar extends Component {
	// Map route → category name
	categoryMap = {
		"/": "General",
		"/business": "Business",
		"/entertainment": "Entertainment",
		"/health": "Health",
		"/science": "Science",
		"/sports": "Sports",
		"/technology": "Technology",
	};

	render() {
		const { location } = this.props;
		const currentCategory =
			this.categoryMap[location.pathname] || "General";

		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
									{Object.entries(this.categoryMap).map(
										([path, name]) => (
											<li key={path}>
												<NavLink
													to={path}
													end={path === "/"}
													className={({ isActive }) =>
														"dropdown-item" +
														(isActive
															? " active"
															: "")
													}>
													{name}
												</NavLink>
											</li>
										)
									)}
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

// ✅ Wrapper to inject `location` into Navbar (since it's a class)
export default function NavbarWithRouter(props) {
	const location = useLocation();
	return (
		<Navbar
			{...props}
			location={location}
		/>
	);
}
