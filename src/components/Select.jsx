import React from 'react';
import '@styles/Select.scss';

const Select = ({ label }) => {
    return (
        <div className='itemsFilter'>
            <label>{label}</label>
            <select>
                <option selected>All</option>
                <option>Greece</option>
            </select>
        </div>
  )
}

export default Select;