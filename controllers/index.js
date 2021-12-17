const Mountains = require ('../models/Mountains')
const Dogs = require('../models/Dogs')













const createDog = async (req, res) => {
    try {
        const dogs = await new Dogs(req.body)
        await dogs.save()
        return res.status(201).json({ dogs });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
const getAllDogs = async (req, res) => {
    try {
        const dogs = await Dogs.find()
        return res.status(200).json({ dogs })
    } catch (error) {
        return res.status(500).send(error.message);
    }
  }
const getAllMountains = async (req, res) => {
  try {
      const mountains = await Mountains.find()
      return res.status(200).json({ mountains })
  } catch (error) {
      return res.status(500).send(error.message);
  }
}


module.exports = {
    createDog,
    getAllMountains,
    getAllDogs
}