const axios = require('axios')
require('dotenv').config();
const { API_KEY } = process.env;
const URL = `https://api.thedogapi.com/v1/breeds?${API_KEY}`;
const { Temperament } = require('../db');
const { getAllDogs  } = require('./dogsControllers');

const getTemperaments = async (req, res) => {
    const allData = await axios.get(URL);
    try {
        let everyTemperament = allData.data.map(dog => dog.temperament ? dog.temperament : "No info").map(dog => dog?.split(', '));
        /* Set para hacer UNIQUE :: Stackoverflow */
        let eachTemperament = [...new Set(everyTemperament.flat())];
        eachTemperament.forEach(el => {
            if (el) { // temperament : ,
                Temperament.findOrCreate({
                    where: { name: el }
                });
            }
        });
        eachTemperament = await Temperament.findAll();
        res.status(200).json(eachTemperament);
    } catch (error) {
        res.status(404).send(error)
    }
};

const getDogsByTemperament = async (req, res) => {
    const temperament = req.query.temperament;
    const everyDog = await getAllDogs();
    const dogSearchResult = everyDog.filter((dog) => {
        if (temperament === 'all') return everyDog
        else if (dog.temperament) {
            return (dog.temperament.toLowerCase()).includes(temperament.toLowerCase())
        }
    });
    res.status(200).json(dogSearchResult)
};

const createTemperament = async (req, res) => {
    try{
    const newTemperament = req.params.temperament;
    const postedTemp = await Temperament.create({
       name: newTemperament,
    });
    return res.status(200).json(postedTemp)
    } catch (error) {
        res.status(404).send(error)
    }
};

module.exports = { getTemperaments, getDogsByTemperament, createTemperament }