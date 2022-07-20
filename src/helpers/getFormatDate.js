import { format } from 'date-fns'
import { es } from 'date-fns/locale';

export const getFormatDate = ( date, formatDate ) => {

    const formattedDate = format(new Date(date), formatDate, { locale: es })

    return formattedDate;
}