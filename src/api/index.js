import  salesData from './sales'
import { isSameDay, isSameWeek, isSameMonth } from 'date-fns'

export const getSales = ( filterDate = '', filterOptions = '') => {

    let response;

    if( filterDate !== '' && filterOptions !== ''){
        return salesData;
    }else if(filterDate !== ''){

        switch (filterDate) {
            case 'today':
                response = salesData.filter( sale => isSameDay( new Date(sale.date), new Date()) );
                break;
            case 'week':
                response = salesData.filter( sale => isSameWeek( new Date(sale.date), new Date()) );
                break;
            default:
                response = salesData.filter( sale => isSameMonth(new Date(sale.date), new Date()));
                break;
        }

        return response;
    }
}