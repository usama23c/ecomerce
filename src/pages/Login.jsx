import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import HeaderDashed from "../components/HeaderDashed";

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);

	const validationSchema = Yup.object().shape({
		email: Yup.string()
			.email("Invalid email format")
			.required("Email is required"),
		password: Yup.string()
			.required("Password is required")
			.min(8, "Password must be at least 8 characters")
			.matches(/[a-z]/, "Password must contain at least one lowercase letter")
			.matches(/[A-Z]/, "Password must contain at least one uppercase letter")
			.matches(
				/[!@#$%^&*(),.?":{}|<>]/,
				"Password must contain at least one special character"
			),
	});

	const handleSubmit = (values) => {
		console.log("Form data", values);
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="Login-Page text-center sec-padd"
		>
			<div className="container">
				<HeaderDashed head1="Log" head2="IN" />

				<Formik
					initialValues={{ email: "", password: "" }}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
				>
					{({ isSubmitting }) => (
						<Form className="mt-5 d-flex flex-column gap-5 align-items-center border border-2 p-4">
							<div className="d-flex flex-column align-items-start w-100">
								<label htmlFor="email" className="mb-2 fs-4">
									Email:
								</label>
								<Field
									className="p-3 py-203 outline-0 w-100 border-gray border-05"
									name="email"
									type="text"
									id="email"
									placeholder="example@gmail.com"
								/>
								<ErrorMessage
									name="email"
									component="div"
									className="text-danger mt-2"
								/>
							</div>
							<div className="d-flex flex-column align-items-start w-100">
								<label
									htmlFor="password"
									className="mb-2 fs-4 w-100 d-flex justify-content-between"
								>
									Password:{" "}
									<span
										className={`cursor c-gray ${showPassword && "active"}`}
										onClick={() => setShowPassword((prev) => !prev)}
									>
										show
									</span>
								</label>
								<Field
									className="p-3 py-203 outline-0 w-100 border-gray border-05"
									name="password"
									type={`${showPassword ? "text" : "password"}`}
									id="password"
									placeholder="Enter Your Password"
								/>

								<ErrorMessage
									name="password"
									component="div"
									className="text-danger mt-2"
								/>
							</div>
							<button
								className="btn bg-black py-2 px-4 rounded c-white fs-5"
								type="submit"
								disabled={isSubmitting}
							>
								Sign In
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</motion.div>
	);
};

export default Login;
