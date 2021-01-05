import React, {useState} from 'react'

export default function Search(props) {
    
    const [searchValue, setSearchValue] = useState('')

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value)
    }
    
    const resetInputField = () => {
        setSearchValue('')
    }
    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue)
        resetInputField();
    }

    const handleQuery = (e) => {
        props.setQueryType(e.target.value)
        props.setInformation([])
    }
    return (
        <div>
            <form className='search'>
                <input
                    value={searchValue}
                    onChange={handleSearchInputChanges}
                    type='text'
                />
                <input onClick={callSearchFunction} type='submit' value='SEARCH' />
                <select onChange={handleQuery}>
                    <option value={' '} >Category</option>
                    <option value='people'>People</option>
                    <option value='starships' >Starships</option>
                    <option value='planets' >Planets</option>
                </select>
            </form>
        </div>
    )
}
