const express = require('express');
const router = express.Router();
const person = require('./../models/personSchema');

router.get('/', async (req, res)=>{
  try{
    const data = await person.find();
    console.log("data fetched!");
    res.status(200).json(data);
  }catch(err){
    console.log("error  while fetching data!");
  }
});

router.post('/', async (req, res)=>{
    try{
        const data = req.body;
        const personData = new person(data);
        const response = await personData.save();
        console.log("data saved!");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
    }
});

router.put('/:id', async (req, res)=>{
    try{

        const personId = req.params.id;
        const updatePersonData = req.body;

        const response = await person.findByIdAndUpdate(personId, updatePersonData, {
            new: true,
            runValidators: true
        });
        if(!response){
            console.log("person doesnot found!")
        }

        console.log("data update succes!");
        res.status(200).json(response);

    }catch(err){
        console.log("internal server error");
    }
});

router.delete('/:id', async (req, res)=>{
  try{  const personId = req.params.id;
    const deletePersonData = req.body;
    const response = await person.findByIdAndDelete(personId);
    if(!response){
        console.log("user not found");
    };

    console.log("data deleted");
    res.status(200).json({massage: 'person deleted succes!'});
}catch(err){
    console.log("internal server error");
}
})

module.exports = router;