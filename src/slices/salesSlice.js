import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getSales } from '../api';
import { setLoading } from './uiSlice';

const initialState = {
  sales: [],
  filterDate: {},
  filterOptions: {},
  totalAmount: null
};

export const fetchSales = createAsyncThunk(
  'data/fetchSales',
  async ({filterDate, filterOptions}, { dispatch }) => {
    dispatch(setLoading(true));
    const dataSales = await getSales(filterDate.code, filterOptions);
    dispatch(setSales(dataSales));
    dispatch(setFilterDate(filterDate));
    dispatch(setLoading(false));
  }
);

export const salesSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setSales: (state, action) => {
      state.sales = action.payload;
      state.totalAmount =  action.payload.reduce((previousValue, currentValue) => previousValue + currentValue.amount, 0);
    },
    setFilterDate: (state, action) => {
      state.filterDate = action.payload;
    },
  },
});

export const { setSales, setFilterDate } = salesSlice.actions;

export default salesSlice.reducer;