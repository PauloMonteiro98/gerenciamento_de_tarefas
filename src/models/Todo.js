const mongoose = require('mongoose')

const Todo = mongoose.model('Todo',{
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false
    },
});

mongoose.connect('mongodb+srv://paulomonteiro:tsiturma2022@cluster0.cjsdyeo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>console.log('Banco conectado!'))
.catch((err)=>console.error('Erro ao conectar-se ao banco de dados!', err));

module.exports = Todo;