const express = require('express');
const router = express.Router();
const connectDB = require('../db');
const User = require('../models/user')

connectDB();

router.post('/',async (req, res)=>{
    try{
        
        const data = req.body;
        const newUser = new User(data);
        const savedUser = await newUser.save();
        res.status(201).json({ message: "User saved", user: savedUser });
    }catch(err){
        res.status(400).json({ error: err.message });
    }
})

router.get('/',async(req, res)=>{
    try{
        const email = req.query.email
        if(email){
            const user = await User.findOne({email:email})
            

            if(!user){
                return  res.status(404).json({ message: 'User not found' });
            }
            return res.status(200).json(user);
        }
        const users = await User.find()
        res.status(200).json(users);
    }   
    catch(err)
    {
        res.status(500).json({ error: err.message });
    }
})
//parameterised query
router.get('/:id',async(req , res)=>{
    try{
        const id = req.params.id;
        const user = await User.findById(id);
        res.status(200).json(user);

        
        if (!user) {
    res.status(404).json({ error: 'User not found' });
}
    }
    catch(err){
        res.status(404).json({error : err.message});
    }
})



module.exports = router;