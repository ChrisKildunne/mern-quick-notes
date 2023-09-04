const Note = require('../../models/note')

async function create(req,res){
    try{
        const note = await Note.create({
            user: req.user._id,
            text: req.body.text,
            createdAt: new Date(),
        });
        res.json(note)
    }catch(err){
        res.status(400).json(err)
    }
}

async function getAll(req,res){
    const notes = await Note.find({user: req.user._id})
    res.json(notes)
}

module.exports ={
    create,
    getAll
}