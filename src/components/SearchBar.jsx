import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';

const SearchBar = () => {
    const {setActiveSearch, search, setSearch} = useContext(ShopContext);

    const manageCloseBar = () => {
        setActiveSearch(false);
        setSearch('')
    }

  return (
        <div className="container search-field border-bottom border-c-gray col-12 d-flex justify-content-center align-items-center py-3 bg-body-tertiary">
            <input type="text" className="rounded-pill border-ml-gray outline-0 p-2 px-3" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value.trim())}/>
            <i className='bx bx-x fs-2 p-2 cursor c-gray' onClick={manageCloseBar}></i>
        </div>
        
  )
}

export default SearchBar
