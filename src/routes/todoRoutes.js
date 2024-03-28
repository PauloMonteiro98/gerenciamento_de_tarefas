const router = require('express').Router();
const Todo = require('../models/Todo');

//// CREATE
router.post('/', async(req, res)=>{   
    try{
        const {title, description} = req.body

        if(!title || !description) {
            return res.status(400).send('Os campos "title" e "description" são obrigatórios.');
        }
        const todoCreate = new Todo({
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed
        })
        await todoCreate.save();
        res.status(200).send(todoCreate);
    } catch(err) {
        res.status(500).send(err);
    }
});

//// READ
router.get('/', async(req, res)=>{
    try {
        const todoRead = await Todo.find();
        res.status(200).send(todoRead);
    } catch (err) {
        res.status(500).send(err);
    }
});

//// READ by ID
router.get('/:id', async(req, res)=>{
    try {
        const todoReadId = await Todo.findById(req.params.id);
        if(!todoReadId){
            return res.status(404).send('Nenhuma tarefa encontrada!');
        } 
        res.status(200).send(todoReadId);
    } catch (err) {
        res.status(500).send(err);
    }
});


//// UPDATE
router.put('/:id', async(req, res) =>{
    try{
        const {title, description} = req.body

        if(!title || !description) {
            return res.status(400).send('Os campos "title" e "description" são obrigatórios.');
        }
        const todoUpdate = await Todo.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed        
        })
        if(!todoUpdate){
            return res.status(404).send('Nenhuma tarefa encontrada!');
        }
        res.status(200).send(todoUpdate);
    } catch(err) {
        res.status(500).send(err);
    }
});

//// DELETE
router.delete('/:id', async(req,res)=>{
    try{
        const todoDelete = await Todo.findByIdAndDelete(req.params.id)
        if(!todoDelete){
            return res.status(404).send('Nenhuma tarefa encontrada!');
        } 
        res.status(200).send(todoDelete);
    } catch(err) {
        res.status(500).send(err);
    }
});

module.exports = router