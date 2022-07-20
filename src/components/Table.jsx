import React from 'react'
import '../styles/Table.scss'

import { useSelector } from 'react-redux';

const Table = ({ columns, children }) => {

    const { filterDate } = useSelector((state) => state.data);

    return (
        <div className='wrapper-table'>
            <div className='title-table'>
                <h1>Tus ventas de {filterDate.label && filterDate.label.toLowerCase()}</h1>
            </div>
            <div className='table-responsive'>
                <table className="table">
                    <thead>
                        <tr>
                            {
                                columns.map((column) => {
                                    return (
                                        <th key={column.label} colSpan={`${ column.field === 'payment_method' ? '': '' }`}>{column.label}</th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {children}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table