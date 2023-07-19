const movieRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const {
  getMovie, deleteMovieById, createMovie,
} = require('../controllers/movies');
const { urlValidation } = require('../middlewares/validation');

movieRouter.get('/', getMovie);

movieRouter.delete('/:movieId', celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().required().hex(),
  })
}), deleteMovieById);

movieRouter.post('/', celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().regex(urlValidation),
    trailerLink: Joi.string().required().regex(urlValidation),
    thumbnail: Joi.string().required().regex(urlValidation),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  })
}), createMovie);

module.exports = movieRouter;
