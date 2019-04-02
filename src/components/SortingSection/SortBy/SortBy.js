import React from 'react'

import './SortBy.scss'
import Types from '../../Search/SearchTypes/Types/Types';

const SortBy = () => {
  return (
    <div className='sort-filters'>
      <p>
        Sort by
      </p>
      <Types inputId='release' inputClass='secondary-filter' inputName='sort' inputType='radio' inputValue='RELEASE' inputText='release date' checkedByDefault />
      <Types inputId='rating' inputClass='secondary-filter' inputName='sort' inputType='radio' inputValue='RATING' inputText='rating' />
    </div>
  )
}

export default SortBy;