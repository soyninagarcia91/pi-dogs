const { Router } = require('express');
const router = Router();
const { dogsController, createDog, getDogById } = require('../controllers/dogsControllers')
const { getTemperaments, getDogsByTemperament, createTemperament } = require('../controllers/temperamentsControllers')
const { getAllBreeds, breedGroupsController } = require('../controllers/breedsControllers')


/* http://localhost:3001/dogs && http://localhost:3001/dogs/?name=Affenpinscher */
router.get('/dogs', dogsController)

/* http://localhost:3001/dogs */
router.post('dogs', createDog)

/* http://localhost:3001/dogs/7 */
router.get('dogs/:id', getDogById)



/* http://localhost:3001/temperaments */
router.get('/temperaments', getTemperaments)

/* http://localhost:3001/dogs/?temperament=calm */
router.get('/dogs', getDogsByTemperament)

/* http://localhost:3001/temperaments/hulk */
router.post('/temperaments/:temperament', createTemperament)



/* http://localhost:3001/breeds */
router.get('/breeds', getAllBreeds)

/* http://localhost:3001/dogs/?breedGroup=terrier */
router.get('/dogs', getDogsByBreed)


module.exports = router;
