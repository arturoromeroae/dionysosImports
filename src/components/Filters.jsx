import React from 'react';
import '@styles/Filters.scss';

const Filters = () => {
    return (
        <div>
            <h3 className='titleFilter'>Filter Products</h3>
            <form>
                <div className='filterContainer'>
                    <div className='itemsFilter'>
                        <label>Country</label>
                        <select>
                            <option selected>All</option>
                            <option>Greece</option>
                        </select>
                    </div>
                    <div className='itemsFilter'>
                        <label>Region</label>
                        <select>
                            <option selected>All</option>
                            <option></option>
                        </select>
                    </div>
                    <div className='itemsFilter'>
                        <label>Producer</label>
                        <select>
                            <option selected>All</option>
                            <option></option>
                        </select>
                    </div>
                    <div className='itemsFilter'>
                        <label>Size</label>
                        <select>
                            <option selected>All</option>
                            <option></option>
                        </select>
                    </div>
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