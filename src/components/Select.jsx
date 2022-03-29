import React from 'react';
import '@styles/Select.scss';

const Select = ({ label }) => {
    return (
        <div className='itemsFilter'>
            <label>{label}</label>
            <select defaultValue={'all'}>
                <option value='all'>All</option>
                <option value='country'>Greece</option>
            </select>
        </div>
  )
}

export default Select;