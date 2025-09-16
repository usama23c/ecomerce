import { useState } from "react";

const SubscriptionForm = () => {
	const [emailValue, setEmailValue] = useState('');
	
	const handleForm = (e) => {
		e.preventDefault();
		console.log('subecibed sucessfully');
		// clear input
		setEmailValue('')
	}

	return (
		<section id="subscription-form" className="sec-padd">
			<div className="container d-flex flex-column gap-3">
				{/* Section Title */}
				<h3>Subscribe now & get 20% off</h3>

				{/* Description */}
				<p className="c-gray fs-small">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry.
				</p>

				{/* Subscription Form */}
				<form className="form d-flex" onSubmit={handleForm}>
					<input
						type="email"
						className="col-8 col-sm-9 px-3 border-gray outline-0"
						placeholder="enter your email"
						onChange={(e) => setEmailValue(e.target.value)}
						value={emailValue}
						required
					/>
					{/* <button className="btn rounded-0 py-203 bg-black c-white col-4 col-sm-3 fs-tiny" onClick={handleForm}> */}
					<button className="btn rounded-0 py-203 bg-black c-white col-4 col-sm-3 fs-tiny">
						SUBSCRIBE
					</button>
				</form>
			</div>
		</section>
	);
};

export default SubscriptionForm;
