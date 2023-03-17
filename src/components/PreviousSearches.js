
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


function PreviousSearches() {


    const searches = ["pizza", "burger", "cookies", "juice", "biryani", "salad", "ice-cream", "noodles", "soup", "cake"]

  return (
      <div className='previous-searches section'>
          <h2>Previous Serches</h2>
          <div className='previous-searches-container'>
              {searches.map(searchele => (<div className='search-item'>
                  {searchele}
              </div>))}
          </div>
          <div className='search-box'>
              <input type="text" placeholder='search...' />
              <button className='btn'>
                  <FontAwesomeIcon icon={faSearch} />
              </button>
          </div>
      </div>
  )
}

export default PreviousSearches
