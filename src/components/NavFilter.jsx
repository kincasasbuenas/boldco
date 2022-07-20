import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchSales, setFilterDate} from '../slices/salesSlice';
import '../styles/NavFilter.scss'
import { getFormatDate } from '../helpers/getFormatDate';

const NavFilter = () => {

    const currentlyMonth = getFormatDate(new Date(), 'LLLL');
    const [isActive, setIsActive] = useState({ label: currentlyMonth, code: 'month' });
    const menuItems = [
        { label: 'Hoy', code: 'today' },
        { label: 'Esta semana', code: 'week' },
        { label: currentlyMonth, code: 'month' }
    ];
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setFilterDate(isActive));
      }, [])

    const setHandleFilterDate = (filter) => {
        setIsActive(filter);
        dispatch(fetchSales({filterDate:filter}));
    }

    return (
        <nav className='navbar-filter'>
            <ul className='navbar-items'>
                {menuItems.map(menuItem => {
                    return <li
                        className={`nav-item ${isActive.code === menuItem.code && 'active'}`}
                        onClick={() => { setHandleFilterDate(menuItem) }}
                        key={menuItem.code}>
                        {menuItem.label}
                    </li>
                })}
            </ul>
        </nav>
    )
}

export default NavFilter