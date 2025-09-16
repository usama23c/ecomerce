// import { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";

// const  FiltersSidebar = ({ filterByData }) => {
// 	// State to show/hide category filter (for small screens)
// 	const [showCategory, setShowCategory] = useState(false);       
// 	// State for selected categories and types
// 	const [activeCategories, setActiveCategories] = useState([]);
// 	const [activeTypes, setActiveTypes] = useState([]);
// 	const {search} = useContext(ShopContext)

// 	// Trigger filter function whenever categories or types change
// 	useEffect(() => {
// 		filterByData({categories: activeCategories, types: activeTypes});
// 	}, [activeCategories, activeTypes, search])

// 	// Toggle selected categories
// 	const manageActiveCategories = (e) => {
// 		const value = e.target.value;
// 		setActiveCategories(prev => prev.includes(value)? prev.filter(el => el !== value) : [...prev, value]);
// 	}

// 	// Toggle selected types
// 	const manageActiveTypes = (e) => {
// 		const value = e.target.value;
// 		setActiveTypes(prev => prev.includes(value)? prev.filter(el => el !== value) : [...prev, value]);
// 	}

// 	return (
// 		<aside className="filters-sidebar col-12 col-md-4 col-lg-3 col-xxl-2">
// 			{/* Toggle button for small screens */}
// 			<h3
// 				className="small-screen fw-normal fs-4 d-flex align-items-center gap-2 fit-content p-2 trans-3 rounded"
// 				role="button"
// 				aria-expanded={showCategory}
// 				onClick={() => setShowCategory((prev) => !prev)}
// 			>
// 				FILTERS
// 				<i
// 					className={`fs-2 mt-1 c-gray bx bxs-chevron-right ${
// 						showCategory && "active"
// 					}`}
// 				></i>
// 			</h3>

// 			{/* Filters label for large screens */}
// 			<h3 className="large-screen fw-normal fs-4 d-none mt-2">FILTERS</h3>
			
// 			{/* Category filter */}
// 			<div
// 				className={`category border rounded p-3 mt-405 ${
// 					showCategory ? "d-block" : "d-none"
// 				}`}
// 			>
// 				<h4 className="fs-6 mb-205">CATEGORIES</h4>
// 				<ul className="list-unstyled mb-0">
// 					<li>
// 						<input type="checkbox" name="category" id="men" value="Men" onClick={manageActiveCategories} aria-label="Men category" />
// 						<label className="ps-2 mt-1 fw-light" htmlFor="men">
// 							Men
// 						</label>
// 					</li>
// 					<li>
// 						<input type="checkbox" name="category" id="women" value="Women" onClick={manageActiveCategories} aria-label="Women category" />
// 						<label className="ps-2 mt-1 fw-light" htmlFor="women">
// 							Women
// 						</label>
// 					</li>
// 					<li>
// 						<input type="checkbox" name="category" id="kids" value="Kids" onClick={manageActiveCategories} aria-label="Kids category" />
// 						<label className="ps-2 mt-1 fw-light" htmlFor="kids">
// 							Kids
// 						</label>
// 					</li>
// 				</ul>
// 			</div>

// 			{/* Type filter */}
// 			<div
// 				className={`type border rounded p-3 mt-4 ${
// 					showCategory ? "d-block" : "d-none"
// 				}`}
// 			>
// 				<h4 className="fs-6 mb-205">TYPE</h4>
// 				<ul className="list-unstyled mb-0">
// 					<li>
// 						<input type="checkbox" name="type" id="topwear" value="Topwear" onClick={manageActiveTypes} aria-label="Topwear type" />
// 						<label className="ps-2 mt-1 fw-light" htmlFor="topwear">
// 							Topwear
// 						</label>
// 					</li>
// 					<li>
// 						<input type="checkbox" name="type" id="bottomwear" value="Bottomwear" onClick={manageActiveTypes} aria-label="Bottomwear type" />
// 						<label className="ps-2 mt-1 fw-light" htmlFor="bottomwear">
// 							Bottomwear
// 						</label>
// 					</li>
// 					<li>
// 						<input type="checkbox" name="type" id="winterwear" value="Winterwear" onClick={manageActiveTypes} aria-label="Winterwear type" />
// 						<label className="ps-2 mt-1 fw-light" htmlFor="winterwear">
// 							Winterwear
// 						</label>
// 					</li>
// 				</ul>
// 			</div>
// 		</aside>
// 	);
// };

// export default FiltersSidebar;


import { useContext, useEffect, useState, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { ShopContext } from "../context/ShopContext";

const FiltersSidebar = ({ filterByData }) => {
  const { search } = useContext(ShopContext);
  const [showCategory, setShowCategory] = useState(false);
  const [activeCategories, setActiveCategories] = useState([]);
  const [activeTypes, setActiveTypes] = useState([]);

  // Memoized filter options
  const filterOptions = useMemo(
    () => ({
      categories: [
        { value: "Men", label: "Men" },
        { value: "Women", label: "Women" },
        { value: "Kids", label: "Kids" },
      ],
      types: [
        { value: "Topwear", label: "Topwear" },
        { value: "Bottomwear", label: "Bottomwear" },
        { value: "Winterwear", label: "Winterwear" },
      ],
    }),
    []
  );

  // Toggle category or type
  const toggleFilter = useCallback((setState, value) => {
    setState((prev) =>
      prev.includes(value) ? prev.filter((el) => el !== value) : [...prev, value]
    );
  }, []);

  // Clear all filters
  const clearFilters = useCallback(() => {
    setActiveCategories([]);
    setActiveTypes([]);
  }, []);

  // Trigger filter function
  useEffect(() => {
    filterByData({ categories: activeCategories, types: activeTypes });
  }, [activeCategories, activeTypes, search, filterByData]);

  return (
    <aside
      className="filters-sidebar w-full md:w-64 lg:w-56 xl:w-48 p-4 bg-white rounded-lg shadow-md"
      role="complementary"
      aria-labelledby="filters-heading"
    >
      <h3
        id="filters-heading"
        className="text-lg font-semibold text-gray-900 flex items-center justify-between cursor-pointer md:cursor-default py-2"
        role="button"
        aria-expanded={showCategory}
        onClick={() => setShowCategory((prev) => !prev)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setShowCategory((prev) => !prev);
          }
        }}
      >
        Filters
        <svg
          className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 md:hidden ${
            showCategory ? "rotate-90" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </h3>

      <div
        className={`mt-4 space-y-4 ${showCategory ? "block" : "hidden md:block"}`}
      >
        {/* Categories */}
        <div className="border border-gray-200 rounded-lg p-4">
          <h4 className="text-sm font-medium text-gray-700 mb-3">Categories</h4>
          <ul className="space-y-2">
            {filterOptions.categories.map(({ value, label }) => (
              <li key={value} className="flex items-center">
                <input
                  type="checkbox"
                  id={`category-${value}`}
                  value={value}
                  checked={activeCategories.includes(value)}
                  onChange={() => toggleFilter(setActiveCategories, value)}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  aria-label={`${label} category`}
                />
                <label
                  htmlFor={`category-${value}`}
                  className="ml-2 text-sm text-gray-600"
                >
                  {label}
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Types */}
        <div className="border border-gray-200 rounded-lg p-4">
          <h4 className="text-sm font-medium text-gray-700 mb-3">Type</h4>
          <ul className="space-y-2">
            {filterOptions.types.map(({ value, label }) => (
              <li key={value} className="flex items-center">
                <input
                  type="checkbox"
                  id={`type-${value}`}
                  value={value}
                  checked={activeTypes.includes(value)}
                  onChange={() => toggleFilter(setActiveTypes, value)}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  aria-label={`${label} type`}
                />
                <label
                  htmlFor={`type-${value}`}
                  className="ml-2 text-sm text-gray-600"
                >
                  {label}
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Clear Filters Button */}
        {(activeCategories.length > 0 || activeTypes.length > 0) && (
          <button
            onClick={clearFilters}
            className="w-full mt-4 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            aria-label="Clear all filters"
          >
            Clear Filters
          </button>
        )}
      </div>
    </aside>
  );
};

FiltersSidebar.propTypes = {
  filterByData: PropTypes.func.isRequired,
};

export default FiltersSidebar;
