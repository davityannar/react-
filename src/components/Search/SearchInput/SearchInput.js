import React from 'react';

import './SearchInput.scss';

const SearchInput = (props) => {
    


    return (
        <div>
            <input className='inputClass' placeholder = {props.placeholder} />
        </div>
    )
}

export default SearchInput;