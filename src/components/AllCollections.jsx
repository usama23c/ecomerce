import { useEffect, useState } from "react";
import CollectionCard from "./CollectionCard";
import FetchWaitingMsg from "./FetchWaitingMsg";
import HeaderDashed from "./HeaderDashed";

const AllCollections = ({ data }) => {
	// State to manage sorted data and the sorting criteria
	const [sortedData, setSortedData] = useState([]);
	const [sortBy, setSortBy] = useState(null);

	// Function to handle sorting of data by price
	const sortData = (price) => {
		let newData = [...data];
		setSortBy(price);
		switch(price) {
			case 'low-high':
                newData.sort((a, b) => a.price - b.price);
                break;
            case 'high-low':
                newData.sort((a, b) => b.price - a.price);
                break;
			case 'default':
            default:
                newData = [...data];
                break;
		}
		setSortedData(newData)
	}

	// Effect to update sortedData when data changes
    useEffect(() => {
        setSortedData(data); 
		if (sortedData.length) {
			sortData(sortBy)
		}
    }, [data]);

	return (
		<section id="all-collections">
			<header className="d-flex justify-content-between align-items-center">
				<HeaderDashed head1="ALL" head2="COLLECTIONS" />
				
				{/* Sorting options dropdown */}
				<select
					className="text-center border-2 border-l-gray outline-0 py-2 fs-small cursor"
					onChange={(e) => sortData(e.target.value)}
				>
					<option value="default">Sort by: Relevant</option>
					<option value="low-high">Sort by: Low to High</option>
					<option value="high-low">Sort by: High to Low</option>
				</select>
			</header>

			{/* Product display section */}
			<section className="mt-3">
				<div className="row row-gap-4">
					{!sortedData.length ? (
						<FetchWaitingMsg />               // Show loading message
					)                 
					: (
						sortedData.map((product, i) => (
							<div className="col-6 col-lg-4 col-xl-3" key={i}>
								<CollectionCard data={product} />
							</div>
						))
					)}
				</div>
			</section>
		</section>
	);
};

export default AllCollections;
