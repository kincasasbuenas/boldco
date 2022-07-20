import React from 'react'
import '../styles/Card.scss'
import { getFormatCurrency } from '../helpers/getFormatCurrency';
import { getFormatDate } from '../helpers/getFormatDate';
import { startOfWeek, lastDayOfWeek  } from 'date-fns'

const Card = ({title, amount, fulldate}) => {

  let formatDate = '';
  if(fulldate.code === 'today'){
    formatDate = 'LLLL d';
  }else if( fulldate.code === 'week'){
    formatDate = 'LLLL d'
  }else {
    formatDate = 'LLLL, yyyy'
  }

  let finalDate = '';

  if(fulldate.code === 'week') {
    finalDate = ` ${getFormatDate(new Date(),'LLLL')} ${ getFormatDate(startOfWeek(new Date(), {weekStartsOn: 1}), 'd')} - ${ getFormatDate(lastDayOfWeek(new Date(),{weekStartsOn: 1}), 'd')}`;
  }else {
    finalDate = getFormatDate(new Date(), formatDate);
  }

  return (
    <div className='card'>
        <div className='header-card'>
            <h3 className="title">{ title }</h3>
            <i className="fas fa-info-circle"></i>
        </div>
        <div className='body-card'>
            <h1 className='total-amount'>{ getFormatCurrency(amount) }</h1>
            <p className='date'> { finalDate } </p>
        </div>
    </div>
  )
}

export default Card