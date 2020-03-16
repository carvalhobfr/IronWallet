import axios from 'axios';

const instance = axios.create({
  baseURL: '/api/wallet'
});

const addStock = data =>
  new Promise((resolve, reject) => {
    instance
      .post('/add-stock', data)
      .then(result => {
        const stock = result.data.stock;
        resolve(stock);
      })
      .catch(reject);
  });

const loadStockInformation = () =>
  new Promise((resolve, reject) => {
    instance
      .get('/stock-information')
      .then(result => {
        const stock = result.data.stock;
        resolve(stock);
      })
      .catch(reject);
  });

export { addStock, loadStockInformation };
