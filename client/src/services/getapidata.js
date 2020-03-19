import axios from 'axios';
require('dotenv').config();

const instance = axios.create({
  baseURL: 'https://www.alphavantage.co/query?'
});

const requestDaily = async name =>
  new Promise((resolve, reject) => {
    axios
      .get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${name}&apikey=${process.env.STOCK_API}`
      )
      .then(result => {
        const dailyStock = result.data;
        const info = dailyStock['Time Series (Daily)'];
        const firstKey = Object.keys(info)[0];
        const data = info[firstKey]['4. close'];
        console.log(data);
        resolve(data);
      })
      .catch(reject);
  });

export { requestDaily };
