import { createContext, useState } from "react";
import productsData from "../components/FixedData";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
	const currency = "$";
	const delivery_fee = 10;
    const [activeSearch, setActiveSearch] = useState(false);
    const [search, setSearch] = useState('');
	const value = {
		productsData, currency, delivery_fee, search, setSearch, activeSearch, setActiveSearch
	};
	return (
		<ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
	);
};

export default ShopContextProvider;
