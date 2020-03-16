'use strict';

const { Router } = require('express');

//const User = require('./../models/user');
const Wallet = require('./../models/wallet');
const Stock = require('./../models/stock');

const router = new Router();

router.post('/add-stock', (req, res, next) => {
  const userID = req.user._id;
  const { name, type, quantity, buying_price, currency, date_of_purchase } = req.body;
  Wallet.findOne({ user: userID })
    .then(wallet => {
      return Stock.create({
        name,
        type,
        quantity,
        buying_price,
        currency,
        date_of_purchase,
        wallet
      });
    })
    .then(() => {
      res.redirect('/');
    })
    .catch(error => {
      next(error);
    });
});

router.get('/stock-information/:id', (req, res, next) => {
  const stockId = req.params.id;
  Stock.findById(stockId)
    .then(stock => {
      res.json({ stock });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
