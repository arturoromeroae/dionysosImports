import React from 'react';
import '@styles/SearchForm.scss';
import InputSearch from '@components/InputSearch';

const SearchForm = ({ setOpenModal }) => {

    const onCancel = () => {
        setOpenModal(false);
    };

    return (
        <>
            <form className='searchForm'>
                <div>
                    <span 
                        className='CloseModal'
                        onClick={onCancel}
                    >
                        x
                    </span>
                    <h1 className='TitleForm'>Search</h1>
                    <InputSearch placeHolder="Write a product or a brand" />
                </div>
            </form>
        </>
    )
}

export default SearchForm;