// // export default AdminPanel;
// import { motion } from "framer-motion";
// import HeaderDashed from "../components/HeaderDashed";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const AdminPanel = () => {
//   // Define the validation schema using Yup
//   const validationSchema = Yup.object({
//     email: Yup.string().email("Invalid email address").required("Email is required"),
//     password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
//   });

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="admin-panel text-center sec-padd"
//     >
//       <div className="container">
//         <HeaderDashed head1="ADMIN" head2="PANEL" />

//         <Formik
//           initialValues={{ email: "", password: "" }}
//           validationSchema={validationSchema}
//           onSubmit={(values) => {
//             console.log(values);
//             // Add your form submission logic here
//           }}
//         >
//           {({ isSubmitting }) => (
//             <Form className="mt-5 d-flex flex-column gap-5 align-items-center">
//               <div className="d-flex flex-column align-items-start w-100">
//                 <label htmlFor="email" className="mb-2 fs-4">Email:</label>
//                 <Field
//                   className="p-3 py-203 outline-0 w-100"
//                   name="email"
//                   type="text"
//                   id="email"
//                   placeholder="example@gmail.com"
//                 />
//                 <ErrorMessage name="email" component="div" className="text-danger mt-2" />
//               </div>
//               <div className="d-flex flex-column align-items-start w-100">
//                 <label htmlFor="password" className="mb-2 fs-4">Password:</label>
//                 <Field
//                   className="p-3 py-203 outline-0 w-100"
//                   name="password"
//                   type="password"
//                   id="password"
//                   placeholder="Enter Your Password"
//                 />
//                 <ErrorMessage name="password" component="div" className="text-danger mt-2" />
//               </div>
//               <button
//                 type="submit"
//                 className="btn bg-black py-203 px-5 rounded c-white fs-5"
//                 disabled={isSubmitting}
//               >
//                 Sign In
//               </button>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </motion.div>
//   );
// };

// export default AdminPanel;
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import HeaderDashed from "../components/HeaderDashed";

const AdminPanel = () => {
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
			className="admin-panel text-center sec-padd"
		>
			<div className="container">
				<HeaderDashed head1="ADMIN" head2="PANEL" />

				<Formik
					initialValues={{ email: "", password: "" }}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
				>
					{({ isSubmitting }) => (
						<Form className="mt-5 d-flex flex-column gap-5 align-items-center">
							<div className="d-flex flex-column align-items-start w-100">
								<label htmlFor="email" className="mb-2 fs-4">
									Email:
								</label>
								<Field
									className="p-3 py-203 outline-0 w-100"
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
								<label htmlFor="password" className="mb-2 fs-4 w-100 d-flex justify-content-between">
									Password: <span className={`cursor c-gray ${showPassword && 'active'}`} onClick={() => setShowPassword(prev=>!prev)}>show</span>
								</label>
								<Field
									className="p-3 py-203 outline-0 w-100"
									name="password"
									type={`${showPassword? 'text' : 'password'}`}
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
								className="btn bg-black py-203 px-5 rounded c-white fs-5"
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

export default AdminPanel;
