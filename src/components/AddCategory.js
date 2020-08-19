import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ( { setCategorias } ) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) =>{
        
        setInputValue( e.target.value );
    }

    const handleSearchSbmt = (e) =>{
        
        e.preventDefault();
        if ( inputValue.trim().length > 2 ) {
            setCategorias( cats => [ inputValue, ...cats ] );
            setInputValue('');
        }       
    }
    //KMYJgPaBHpV7IiEBaCJJWlzKnIDaKTHh
    return (
        <form onSubmit={ handleSearchSbmt }>
        <input 
            type="text"
            value={ inputValue }
            onChange={ handleInputChange }
        />
        </form>
    );
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired,
}

export default AddCategory;