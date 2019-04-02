import React from 'react';
import Types from './Types/Types';

import './SearchTypes.scss';

const SearchTypes = () => {
    return (
        <div className='search-filters'>
            <p>
                Search by
            </p>
            <Types inputId='title' inputClass='filter'  inputName='search' inputType='radio' inputValue='TITLE' inputText='Title' checkedByDefault />
            <Types inputId='genre' inputClass='filter'  inputName='search' inputType='radio' inputValue='GENRE' inputText='Genre' />
        </div>
    )
}
export default SearchTypes;