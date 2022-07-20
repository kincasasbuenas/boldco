import { useEffect } from 'react';
import './App.scss';
import Header from './components/Header';
import Card from './components/Card';
import NavFilter from './components/NavFilter';
import FilterSelector from './shared/FilterSelector';
import Table from './components/Table';
import { getTransaction } from './helpers/getTransaction';
import { getFormatCurrency } from './helpers/getFormatCurrency';
import { getFormatDate } from './helpers/getFormatDate';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchSales, } from './slices/salesSlice';


function App() {

  const {sales, filterDate, totalAmount} = useSelector((state) => state.data);
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();
  const currentlyMonth =getFormatDate(new Date(), 'LLLL'); 

  const { columns, rows } = {
    columns: [
      {
        label: 'Transacción',
        field: 'transaction',
        width: 150
      },
      {
        label: 'Fecha y hora',
        field: 'date',
        width: 270
      },
      {
        label: 'Método de pago',
        field: 'payment_method',
        width: 200
      },
      {
        label: 'ID transacción Bold',
        field: 'id_bold',
        width: 100
      },
      {
        label: 'Monto',
        field: 'amount',
        width: 150
      }
    ],
    rows: sales
  };

  useEffect(() => {
    dispatch(fetchSales({filterDate:{label:currentlyMonth, code:'month'}}));
  }, [])


  return (
    <div className="App">
      <Header />
      <div className='container'>
        <section className='wrapper-filters-detail'>
          <div className='left-section'>
            <Card
              title={`Total de ventas de ${ filterDate.label && filterDate.label.toLowerCase()}`}
              amount={totalAmount}
              fulldate={filterDate}
            />
          </div>
          <div className='rigth-section'>
            <NavFilter />
            <FilterSelector />
          </div>
        </section>
        <section className='table-container'>
          <Table columns={columns}>
            {loading ? (
              <tr><td> Cargando...</td></tr>
            ) : (
              <>
                {
                  (rows === undefined || rows.length === 0  ) ?
                    (
                      
                        <tr><td> No se encontraron ventas.</td></tr>
                      
                    ) :
                    (
                      <>
                        {
                          rows.map((row, index) => {
                            return (
                              <tr key={index}>
                                <td>
                                  <i className={ ` ${ row.channel_payment === 'LINK' ? 'fas fa-link' : 'fas fa-calculator' } `}></i>
                                  {getTransaction(row.transaction)}
                                </td>
                                <td>{getFormatDate(row.date, 'dd/MM/yyyy - hh:mm:ss')}</td>
                                <td >
                                  <p className='card-detail'>
                                    <i className={`icon-${row.payment_method.toLocaleLowerCase()}`}></i>
                                     {`**** **** **** ${row.last_card_number}`}
                                  </p>
                                </td>
                                <td>{row.id_bold}</td>
                                <td>{getFormatCurrency(row.amount)}</td>
                              </tr>
                            )
                          })
                        }
                      </>
                    )
                }
              </>
            )}

          </Table>
        </section>
      </div>
    </div>
  );
}

export default App;
