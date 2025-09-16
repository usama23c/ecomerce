
const FetchErrorMsg = () => {
	return (
		<div className="fetchError mt-5 pt-5 text-center p-1">
			{/* Error message heading */}
			<h1>OOPS 😥! Failed to fetch Data</h1>
			{/* Suggests checking the internet connection */}
			<span>Please, check your Internet Connection</span>
		</div>
	);
};

export default FetchErrorMsg;
