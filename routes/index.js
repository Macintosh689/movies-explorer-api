const express = require('express');
const userRouter = require('./users');
const movieRouter = require('./movie');
const NotFoundError = require('../errors/notFound');

const router = express.Router();
router.use('/users', userRouter);
router.use('/movies', movieRouter);
router.use('*', (req, res, next) => next(new NotFoundError('Страница не найдена')));

module.exports = router;
