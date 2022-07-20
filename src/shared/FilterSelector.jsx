import React, { useState } from 'react'
import '../styles/FilterSelector.scss'


const FilterSelector = () => {

    const [toggleFilter, setToggleFilter] = useState(false);
    const options = [
        {value: 'datafono', name: 'Cobro con datáfono'},
        {value: 'link', name: 'Cobros con link de pago'},
        {value: 'all', name: 'Ver todos'}
    ]


  return (
    <div className='filter-selector'>
        <h2 className='btn-filters' onClick={() => { setToggleFilter( !toggleFilter ) }}>
            Filtrar
            <i className={`fas ${ toggleFilter ? 'fa-times': 'fa-filter' }`}></i>
        </h2>
        <div className={`wrapper-filter-options ${ toggleFilter ? 'open': 'close' }`}>
            {
                options.map( (option) => {
                    return (
                        <div className='wrap' key={option.value}>
                            <input type="checkbox" 
                                value={option.value} /> 
                            <label>{option.name}</label>
                        </div>
                    )
                })
            }
            <button className='btn-filter'> Aplicar </button>
        </div>
    </div> 
  )
}

export default FilterSelector