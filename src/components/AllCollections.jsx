// import { useEffect, useState } from "react";
// import CollectionCard from "./CollectionCard";
// import FetchWaitingMsg from "./FetchWaitingMsg";
// import HeaderDashed from "./HeaderDashed";

// const AllCollections = ({ data }) => {
// 	// State to manage sorted data and the sorting criteria
// 	const [sortedData, setSortedData] = useState([]);
// 	const [sortBy, setSortBy] = useState(null);

// 	// Function to handle sorting of data by price
// 	const sortData = (price) => {
// 		let newData = [...data];
// 		setSortBy(price);
// 		switch(price) {
// 			case 'low-high':
//                 newData.sort((a, b) => a.price - b.price);
//                 break;
//             case 'high-low':
//                 newData.sort((a, b) => b.price - a.price);
//                 break;
// 			case 'default':
//             default:
//                 newData = [...data];
//                 break;
// 		}
// 		setSortedData(newData)
// 	}

// 	// Effect to update sortedData when data changes
//     useEffect(() => {
//         setSortedData(data); 
// 		if (sortedData.length) {
// 			sortData(sortBy)
// 		}
//     }, [data]);

// 	return (
// 		<section id="all-collections">
// 			<header className="d-flex justify-content-between align-items-center">
// 				<HeaderDashed head1="ALL" head2="COLLECTIONS" />
				
// 				{/* Sorting options dropdown */}
// 				<select
// 					className="text-center border-2 border-l-gray outline-0 py-2 fs-small cursor"
// 					onChange={(e) => sortData(e.target.value)}
// 				>
// 					<option value="default">Sort by: Relevant</option>
// 					<option value="low-high">Sort by: Low to High</option>
// 					<option value="high-low">Sort by: High to Low</option>
// 				</select>
// 			</header>

// 			{/* Product display section */}
// 			<section className="mt-3">
// 				<div className="row row-gap-4">
// 					{!sortedData.length ? (
// 						<FetchWaitingMsg />               // Show loading message
// 					)                 
// 					: (
// 						sortedData.map((product, i) => (
// 							<div className="col-6 col-lg-4 col-xl-3" key={i}>
// 								<CollectionCard data={product} />
// 							</div>
// 						))
// 					)}
// 				</div>
// 			</section>
// 		</section>
// 	);
// };

// export default AllCollections;

import { useEffect, useState, useMemo, useCallback } from "react";
import CollectionCard from "./CollectionCard";
import FetchWaitingMsg from "./FetchWaitingMsg";
import HeaderDashed from "./HeaderDashed";

const AllCollections = ({ data = [], isLoading = false, error = null }) => {
  // State management
  const [sortedData, setSortedData] = useState([]);
  const [sortBy, setSortBy] = useState("default");

  // Memoized sorting function
  const sortData = useCallback((dataToSort, sortCriteria) => {
    if (!dataToSort?.length) return [];
    
    const sorted = [...dataToSort];
    switch (sortCriteria) {
      case "low-high":
        return sorted.sort((a, b) => (a.price || 0) - (b.price || 0));
      case "high-low":
        return sorted.sort((a, b) => (b.price || 0) - (a.price || 0));
      case "default":
      default:
        return [...dataToSort];
    }
  }, []);

  // Handle sort change
  const handleSortChange = useCallback((e) => {
    const newSortBy = e.target.value;
    setSortBy(newSortBy);
    setSortedData(sortData(data, newSortBy));
  }, [data, sortData]);

  // Update sorted data when input data changes
  useEffect(() => {
    setSortedData(sortData(data, sortBy));
  }, [data, sortBy, sortData]);

  // Memoized content to prevent unnecessary re-renders
  const content = useMemo(() => {
    if (isLoading) {
      return (
        <div className="text-center py-8">
          <FetchWaitingMsg message="Loading collections..." />
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center py-8 text-red-600">
          Error loading collections: {error.message || "Something went wrong"}
        </div>
      );
    }

    if (!sortedData?.length) {
      return (
        <div className="text-center py-8 text-gray-600">
          No collections available
        </div>
      );
    }

    return (
      <div className="row row-gap-4">
        {sortedData.map((product, i) => (
          <div className="col-6 col-lg-4 col-xl-3" key={product.id || i}>
            <CollectionCard data={product} />
          </div>
        ))}
      </div>
    );
  }, [sortedData, isLoading, error]);

  return (
    <section id="all-collections" className="py-6">
      <header className="flex justify-between items-center mb-6">
        <HeaderDashed head1="ALL" head2="COLLECTIONS" />
        <div className="relative">
          <select
            className="appearance-none bg-white border-2 border-gray-300 rounded-md py-2 px-4 pr-8 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer transition duration-200"
            onChange={handleSortChange}
            value={sortBy}
            aria-label="Sort collections"
          >
            <option value="default">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
          {/* Custom dropdown arrow */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
      </header>

      <section className="mt-4">{content}</section>
    </section>
  );
};

export default AllCollections;
