import React, { Children } from 'react';
import '@styles/Filters.scss';

const Filters = ({ children, filterTitle }) => {
    return (
        <div>
            <h3 className='titleFilter'>{filterTitle}</h3>
            <form>
                <div className='filterContainer'>
                    {children}
                </div>
                <div className='buttonsContainer'>
                    <button className='filterButton'>Filter</button>
                    <button type='reset' className='resetButton'>Reset</button>
                </div>
            </form>
        </div>
    )
}

export default Filters;