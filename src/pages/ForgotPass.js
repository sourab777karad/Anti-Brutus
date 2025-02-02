import React from "react";
import { useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../css/Navbar.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ForgotPass = (props) => {
	let navigate = useNavigate();

	function handleClick() {
		props.setisNavbarPresent(true);
		navigate("/home");
	}
	const { theme, setTheme } = React.useContext(ThemeContext);
	useEffect(() => {
		console.log(theme);
		setTheme("light");
		const light_button = document.getElementById("light_button");
		light_button.click();
	});
	return (
		<div className="p-0 m-0 bg-base-100">
			<div className="overflow-hidden">
				<div className="lg:flex rubik overflow-hidden">
					<div className="lg:w-1/2 xl:max-w-screen-sm">
						<div className="py-12 bg-base-100 lg:bg-transparent flex justify-center lg:justify-start lg:px-12">
							<div className="cursor-pointer flex items-center">
								<div id="logo" className="w-12 h-12 m-4"></div>
								<div className="text-2xl text-primary-content tracking-wide ml-2 font-semibold">
									Anti Brutus
								</div>
							</div>
						</div>
						<div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
							<h2
								className="text-center text-4xl text-primary-content font-display font-semibold lg:text-left xl:text-5xl
              xl:text-bold"
							>
								Reset Password
							</h2>
							<div
								className="text-center text-xl text-secondary font-display font-semibold lg:text-left xl:text-xl
              xl:text-bold rubik pt-3"
							>
								“The fault, dear Brutus, is not in our stars But
								in ourselves.”{" "}
								<br></br>
								<br></br>
								<span className="text-accent">
									{" "}
									Ceasar to Brutus, Act 1, Scene III
								</span>
							</div>
							<div className="mt-12">
								<form>
									<div>
										<div className="text-2xl font-bold text-primary-content tracking-wide">
											Email Address
										</div>
										<input
											className="w-full text-xl py-2 border-b border-primary focus:outline-none focus:border-accent bg-transparent"
											type=""
											placeholder="baldev@gmail.com"
										/>
									</div>
									<div className="mt-8">
										<div className="flex justify-between items-center">
											<div className="text-2xl font-bold text-primary-content bg-transparent tracking-wide">
												New Master Password
											</div>
										</div>
										<input
											className="w-full text-lg py-2 border-b border-primary focus:outline-none focus:border-accent bg-transparent"
											type=""
											placeholder="Enter your password"
										/>
									</div>
									<div className="mt-8">
										<div className="flex justify-between items-center">
											<div className="text-2xl font-bold text-primary-content bg-transparent tracking-wide">
												Confirm Master Password
											</div>
										</div>
										<input
											className="w-full text-lg py-2 border-b border-primary focus:outline-none focus:border-accent bg-transparent"
											type=""
											placeholder="Enter your password again. Dont copy paste. "
										/>
									</div>
									<div className="mt-8">
										<div className="flex justify-between items-center">
											<div className="text-2xl font-bold text-primary-content bg-transparent tracking-wide">
												OTP
											</div>
										</div>
										<input
											className="w-full text-lg py-2 border-b border-primary focus:outline-none focus:border-accent bg-transparent"
											type=""
											placeholder="Enter the OTP Received on your phone"
										/>
									</div>
									<div className="mt-10">
										<button
											className="bg-primary p-4 w-full rounded-full tracking-wide
                          font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-primary-focus text-primary-content
                          shadow-lg text-xl cursor-pointer"
											onClick={() => {
												console.log("clicked");
												// navigate to home using router
												handleClick();
											}}
										>
											Log In
										</button>
									</div>
								</form>
								<div className="mt-12 text-xl font-display font-semibold text-primary-content text-center">
									Suddenly Remembered it ?{" "}
									<NavLink
										className="cursor-pointer text-accent hover:text-accent-focus"
										to="/"
									>
										Log In Quick!
									</NavLink>
								</div>
							</div>
						</div>
					</div>
					<div className="hidden lg:flex items-center justify-center bg-indigo-200 flex-1 h-screen">
						<div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
							<div
								id="fpasssvg"
								className="w-[50rem] h-[40rem]"
							></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForgotPass;
